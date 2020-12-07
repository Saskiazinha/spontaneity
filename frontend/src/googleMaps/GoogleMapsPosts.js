import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import mapsStyles from "./mapsStyles";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import NavigationHeader from "../commons/navigation/NavigationHeader";
import Footer from "../commons/navigation/Footer";
import PostContext from "../contexts/PostContext";
import { renderMarker } from "./Marker";
import { IconButtonStyled } from "../buttons/IconButtonStyled";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { getDate } from "../utils/DateUtils";
import PostContent from "../commons/PostContent";

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
  const [selected, setSelected] = useState("");

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
              position={{ lat: post.lat, lng: post.lng }}
              icon={renderMarker(post.statusLocation)}
              onClick={() => setSelected(post)}
            />
          ))}
          {selected && (
            <InfoWindow
              position={{
                lat: selected.lat,
                lng: selected.lng,
              }}
              onCloseClick={() => {
                setSelected("");
              }}
            >
              <WindowStyling>
                <NameStyled> {selected.creator}</NameStyled>
                <PostContent post={selected} />
              </WindowStyling>
            </InfoWindow>
          )}
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
        <IconClock src="/images/peopleClock.png" alt="clocks" />
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
  grid-column: 1;
  justify-self: center;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 10;
`;

const MapsStyling = styled.div`
  grid-row: 2/4;
  grid-column: 1;
  overflow: scroll;
  position: relative;
`;

const WindowStyling = styled.div`
  text-align: center;
`;

const NameStyled = styled.p`
  font-weight: bold;
  font-size: 1.1em;
  color: var(--turquoise-green);
  margin: 0 0 2px 0;
`;

const IconClock = styled.img`
  width: 33px;
`;
