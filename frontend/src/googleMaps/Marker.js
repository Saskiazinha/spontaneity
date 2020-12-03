export const renderMarker = (statusLocation) => {
  switch (statusLocation) {
    case "GREEN":
      return {
        url: "/images/marker_green.svg",
        scaledSize: new window.google.maps.Size(30, 30),
      };
    case "YELLOW":
      return {
        url: "/images/marker_yellow.svg",
        scaledSize: new window.google.maps.Size(30, 30),
      };
    case "BLUE":
      return {
        url: "/images/marker_blue.svg",
        scaledSize: new window.google.maps.Size(30, 30),
      };
  }
};
