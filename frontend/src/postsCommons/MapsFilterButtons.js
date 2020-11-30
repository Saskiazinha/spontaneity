import React from "react";
import { IconButtonStyled } from "../buttons/IconButtonStyled";
import { MdFilterList } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

export const getMapsFilterButtons = (filterActive, setFilterActive) => {
  return [
    <IconButtonStyled key="filter" onClick={handleFilter}>
      <MdFilterList size={34} />
    </IconButtonStyled>,
    <IconButtonStyled key="maps">
      <SiGooglemaps size={30} />
    </IconButtonStyled>,
  ];

  function handleFilter() {
    setFilterActive(!filterActive);
    console.log(filterActive);
  }
};
