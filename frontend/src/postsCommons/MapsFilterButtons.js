import React from "react";
import { IconButtonStyled } from "../buttons/IconButtonStyled";
import { MdFilterList } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

export const getMapsFilterButtons = () => {
  return [
    <IconButtonStyled key="filter">
      <MdFilterList size={34} />
    </IconButtonStyled>,
    <IconButtonStyled key="maps">
      <SiGooglemaps size={30} />
    </IconButtonStyled>,
  ];
};
