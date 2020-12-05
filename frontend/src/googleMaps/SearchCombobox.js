import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function SearchLocationCombobox({ setLocationData }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 53.551086, lng: () => 9.993682 },
      radius: 25 * 1000,
    },
  });

  return (
    <div>
      <Combobox
        onSelect={async (address) => {
          try {
            const results = await getGeocode({ address });
            console.log(results[0]);
            const { lat, lng } = await getLatLng(results[0]);
            setLocationData({
              lat: lat,
              lng: lng,
              address: results[0].formatted_address,
            });
          } catch (error) {
            console.log("error");
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an address"
        />
        <ComboboxPopover>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
