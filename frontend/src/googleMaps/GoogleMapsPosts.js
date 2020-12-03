import React, { useContext } from "react";
// import styled from "styled-components/macro";
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
      <NavigationHeader
        title={"Posts of Friends"}
        day={day}
        postType={"posts"}
      />
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
            icon={{
              url: "/images/marker_blue.svg",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}
      </GoogleMap>
      <Footer />
    </>
  );
}
