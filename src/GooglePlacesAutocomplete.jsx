import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const GooglePlacesAutocomplete = ({
    apiKey,
    onPlaceSelect,
    placeholder = "Search for a location",
    inputClassName = "",
    suggestionsClassName = "",
    suggestionItemClassName = "",
    inputStyle = {},
    suggestionsStyle = {},
    suggestionItemStyle = {},
}) => {
    const inputRef = useRef(null);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState("");

    const preventFormSubmitOnEnter = (e) => {
        if (e.key === "Enter") e.preventDefault();
    };

    useEffect(() => {
        if (!document.getElementById("google-maps")) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
            script.id = "google-maps";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
    }, [apiKey]);

    const fetchLocationSuggestions = (query) => {
        if (!query.trim() || !window.google?.maps) {
            setSuggestions([]);
            return;
        }

        setLoading(true);
        const service = new window.google.maps.places.AutocompleteService();

        service.getPlacePredictions({ input: query }, (predictions, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setSuggestions(predictions || []);
            } else {
                setSuggestions([]);
            }
            setLoading(false);
        });
    };

    const fetchPlaceDetails = (placeId, description) => {
        if (!window.google?.maps) return;

        const service = new window.google.maps.places.PlacesService(document.createElement("div"));

        service.getDetails({ placeId }, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && place.geometry) {
                onPlaceSelect({
                    description,
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                });
                setLocation(description);
                setSuggestions([]);
            }
        });
    };

    return (
        <div className="relative">
            <input
                type="text"
                ref={inputRef}
                value={location}
                onChange={(e) => {
                    setLocation(e.target.value);
                    fetchLocationSuggestions(e.target.value);
                }}
                onKeyDown={preventFormSubmitOnEnter}
                placeholder={placeholder}
                className={`w-full outline-none ${inputClassName}`}
                style={inputStyle}
            />
            {loading && <p className="text-gray-500">Loading...</p>}
            {suggestions.length > 0 && (
                <ul className={`absolute z-10 w-full border rounded shadow ${suggestionsClassName}`} style={suggestionsStyle}>
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.place_id}
                            className={`p-2 cursor-pointer ${suggestionItemClassName}`}
                            style={suggestionItemStyle}
                            onClick={() => fetchPlaceDetails(suggestion.place_id, suggestion.description)}
                        >
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

GooglePlacesAutocomplete.propTypes = {
    apiKey: PropTypes.string.isRequired,
    onPlaceSelect: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    inputClassName: PropTypes.string,
    suggestionsClassName: PropTypes.string,
    suggestionItemClassName: PropTypes.string,
    inputStyle: PropTypes.object,
    suggestionsStyle: PropTypes.object,
    suggestionItemStyle: PropTypes.object,
};

export default GooglePlacesAutocomplete;
