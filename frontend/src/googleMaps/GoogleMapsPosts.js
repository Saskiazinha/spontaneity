import React, { useContext } from "react";
import styled from "styled-components/macro";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import mapsStyles from "./mapsStyles";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import NavigationHeader from "../commons/navigation/NavigationHeader";
import Footer from "../commons/navigation/Footer";
import PostContext from "../contexts/PostContext";
import { renderMarker } from "./Marker";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 53.551086,
  lng: 9.993682,
};
const options = {
  styles: mapsStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function GoogleMapsPosts({ day }) {
  const { posts } = useContext(PostContext);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
      <SpontaneityHeader />
      <NavStyling>
        <NavigationHeader
          title={"Posts of Friends"}
          day={day}
          postType={"posts"}
        />
      </NavStyling>
      <MapsStyling>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
        >
          {posts.map((post) => (
            <Marker
              key={post.id}
              position={{ lat: post.location.lat, lng: post.location.lng }}
              icon={renderMarker(post.statusLocation)}
            />
          ))}
        </GoogleMap>
      </MapsStyling>
      <Footer />
    </>
  );
}

const NavStyling = styled.div`
  grid-row: 2/2;
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  z-index: 10;
`;

const MapsStyling = styled.div`
  grid-row: 2/4;
  overflow: scroll;
  position: relative;
`;
