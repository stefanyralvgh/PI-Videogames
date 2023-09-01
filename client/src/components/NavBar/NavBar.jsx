// import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar/SearchBar";
import { NavContainer } from "./NavBarStyles";

export default function Nav(props) {

  return (
    <NavContainer>
      <SearchBar onSearch={props.onSearch}/>
    </NavContainer>
  );
}
