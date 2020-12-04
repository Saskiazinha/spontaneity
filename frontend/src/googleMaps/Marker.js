export const renderMarker = (statusLocation) => {
  switch (statusLocation) {
    case "GREEN":
      return {
        url: "/images/marker_green.svg",
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(17, 17),
        scaledSize: new window.google.maps.Size(35, 35),
      };
    case "YELLOW":
      return {
        url: "/images/marker_yellow.svg",
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(17, 17),
        scaledSize: new window.google.maps.Size(35, 35),
      };
    case "BLUE":
      return {
        url: "/images/marker_blue.svg",
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(17, 17),
        scaledSize: new window.google.maps.Size(35, 35),
      };
  }
};
