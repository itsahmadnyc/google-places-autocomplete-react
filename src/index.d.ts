declare module "google-places-autocomplete-react" {
    import React from "react";

    export interface PlaceDetails {
        description: string;
        lat: number;
        lng: number;
    }

    export interface GooglePlacesAutocompleteProps {
        apiKey: string;
        onPlaceSelect: (place: PlaceDetails) => void;
        placeholder?: string;
    }

    const GooglePlacesAutocomplete: React.FC<GooglePlacesAutocompleteProps>;
    export default GooglePlacesAutocomplete;
}
