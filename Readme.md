# Google Places Autocomplete for React

[![NPM Version](https://img.shields.io/npm/v/google-places-autocomplete-react.svg)](https://www.npmjs.com/package/google-places-autocomplete-react)
[![License](https://img.shields.io/npm/l/google-places-autocomplete-react.svg)](https://github.com/its_ahmad_nyc/google-places-autocomplete-react/blob/main/LICENSE)

A lightweight and easy-to-use **Google Places Autocomplete** component for React applications. It allows users to search for locations and fetch place details using the Google Places API.

---

## 🚀 Features
- ✅ **Google Places API Integration** – Fetch place suggestions in real-time.
- ✅ **Lightweight & Fast** – Minimal dependencies and optimized performance.
- ✅ **Customizable** – Fully controllable via props.
- ✅ **Easy to Integrate** – Works out of the box with any React app.
- ✅ **TypeScript Support** – Includes TypeScript types for better development experience.

---

## 📦 Installation

Install the package using **npm** or **yarn**:

```sh
npm install google-places-autocomplete-react
```
OR
```sh
yarn add google-places-autocomplete-react
```

---

## 📖 How to Use

### 1️⃣ Basic Usage

```jsx
import React from "react";
import GooglePlacesAutocomplete from "google-places-autocomplete-react";

const App = () => {
    const handlePlaceSelect = (place) => {
        console.log("Selected Place:", place);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto" }}>
            <GooglePlacesAutocomplete 
                apiKey="YOUR_GOOGLE_API_KEY"
                onPlaceSelect={handlePlaceSelect}
            />
        </div>
    );
};

export default App;
```

### 2️⃣ Fetching Place Details

The `onPlaceSelect` callback receives an object containing:

- `description` - The name of the selected place.
- `lat` - Latitude of the location.
- `lng` - Longitude of the location.

**Example:**

```jsx
const handlePlaceSelect = (place) => {
    console.log("Place Name:", place.description);
    console.log("Latitude:", place.lat);
    console.log("Longitude:", place.lng);
};
```

### 3️⃣ Customizing Placeholder Text

```jsx
<GooglePlacesAutocomplete 
    apiKey="YOUR_GOOGLE_API_KEY"
    onPlaceSelect={handlePlaceSelect}
    placeholder="Enter a city or address"
/>
```

### 4️⃣ Styling the Input Field

This component allows full customization via props.

```jsx
<GooglePlacesAutocomplete
    apiKey="YOUR_GOOGLE_API_KEY"
    onPlaceSelect={handlePlaceSelect}
    inputClassName="custom-input"
    suggestionsClassName="custom-suggestions"
    suggestionItemClassName="custom-suggestion-item"
    inputStyle={{ padding: "10px", fontSize: "16px" }}
    suggestionsStyle={{ backgroundColor: "white", borderRadius: "5px" }}
    suggestionItemStyle={{ padding: "8px", cursor: "pointer" }}
/>
```

---

## ⚙️ Props

| Prop Name       | Type       | Required | Description                                    |
|---------------|-----------|----------|------------------------------------------------|
| `apiKey`      | `string`  | ✅ Yes   | Your Google Maps API key.                      |
| `onPlaceSelect` | `function` | ✅ Yes   | Callback function triggered when a place is selected. |
| `placeholder` | `string`  | ❌ No   | Placeholder text for the input field (default: "Search for a location"). |
| `inputClassName` | `string`  | ❌ No   | Custom class name for the input field. |
| `suggestionsClassName` | `string`  | ❌ No   | Custom class name for the suggestions dropdown. |
| `suggestionItemClassName` | `string`  | ❌ No   | Custom class name for each suggestion item. |
| `inputStyle` | `object`  | ❌ No   | Inline styles for the input field. |
| `suggestionsStyle` | `object`  | ❌ No   | Inline styles for the suggestions container. |
| `suggestionItemStyle` | `object`  | ❌ No   | Inline styles for suggestion items. |

---

## 🌎 Google API Setup

To use this package, you need a Google API key with the Places API enabled.

### Steps to Get an API Key:
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Enable the **Places API** under "APIs & Services".
4. Generate an API key under "Credentials".
5. Restrict the key for security (optional).
6. Use the key in the `apiKey` prop.

---

## 🛠 Troubleshooting

### 1️⃣ Autocomplete not working?
✅ Ensure:
- The **Places API** is enabled in your Google Cloud Console.
- The API key is correctly added.
- No CORS or billing issues exist in your Google account.

### 2️⃣ API limit exceeded?
✅ Check your Google Cloud billing settings. Google provides free tier limits for Places API usage.

### 3️⃣ Console errors related to Google Maps?
✅ Make sure:
- The script is loaded only once.
- The key is valid and has permissions.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Contributing

Contributions are welcome! If you’d like to improve this package:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Added feature XYZ"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a Pull Request.

---

## 💬 Support

If you encounter any issues or have suggestions, feel free to:
- Open an issue on [GitHub](https://github.com/its-ahmad-NYC/google-places-autocomplete-react)
- Reach out via Twitter

Happy coding! 🚀
