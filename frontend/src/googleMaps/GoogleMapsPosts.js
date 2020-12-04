import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
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
import { IconButtonStyled } from "../buttons/IconButtonStyled";
import { MdFilterList } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { getDate } from "../utils/DateUtils";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
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

export default function GoogleMapsPosts({ day, indexDay }) {
  const history = useHistory();
  const { posts, matchingPosts } = useContext(PostContext);
  const [postsToPass, setPostsToPass] = useState(posts);
  const [filterActive, setFilterActive] = useState(false);

  useEffect(() => {
    if (filterActive) {
      setPostsToPass(matchingPosts);
    }
    if (!filterActive) {
      setPostsToPass(posts);
    }
  }, [filterActive, posts, matchingPosts]);

  const filteredPosts = postsToPass.filter(
    (post) => post.localDate === getDate(indexDay)
  );

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
          postType={"maps"}
        />
      </NavStyling>
      <MapsStyling>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={11.75}
          center={center}
          options={options}
        >
          {filteredPosts.map((post) => (
            <Marker
              key={post.id}
              position={{ lat: post.location.lat, lng: post.location.lng }}
              icon={renderMarker(post.statusLocation)}
            />
          ))}
        </GoogleMap>
      </MapsStyling>
      <Footer actions={getMapsFilterButtons()} />
    </>
  );

  function getMapsFilterButtons() {
    return [
      <IconButtonStyled
        key="filter"
        onClick={() => setFilterActive(!filterActive)}
        active={filterActive}
      >
        <MdFilterList size={34} />
      </IconButtonStyled>,
      <IconButtonStyled
        key="list"
        onClick={() =>
          history.push("/posts/" + day.toLowerCase().replace(/\s+/g, ""))
        }
      >
        <AiOutlineUnorderedList size={30} />
      </IconButtonStyled>,
    ];
  }
}

const NavStyling = styled.div`
  grid-row: 2/2;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 10;
`;

const MapsStyling = styled.div`
  grid-row: 2/4;
  overflow: scroll;
  position: relative;
`;
