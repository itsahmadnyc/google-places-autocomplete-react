declare module "google-places-autocomplete-react" {
    import React, { CSSProperties } from "react";

    export interface PlaceDetails {
        description: string;
        lat: number;
        lng: number;
    }

    export interface GooglePlacesAutocompleteProps {
        apiKey: string;
        onPlaceSelect: (place: PlaceDetails) => void;
        placeholder?: string;
        inputClassName?: string;
        suggestionsClassName?: string;
        suggestionItemClassName?: string;
        inputStyle?: CSSProperties;
        suggestionsStyle?: CSSProperties;
        suggestionItemStyle?: CSSProperties;
    }

    const GooglePlacesAutocomplete: React.FC<GooglePlacesAutocompleteProps>;
    export default GooglePlacesAutocomplete;
}
