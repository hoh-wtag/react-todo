import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BRAND_LOGO, ICON_SEARCH } from "@utils/constants/icons.js";
import {
  ALT_TEXT_LOGO_ICON,
  ALT_TEXT_SEARCH_ICON,
} from "@utils/constants/texts.js";
import { updateSearchQuery } from "@store/actions";
import IconButton from "@components/IconButton";

import "./index.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const searchQuery = useSelector((state) => state.searchQuery);
  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    dispatch(updateSearchQuery(query));
  };

  function setVisibality() {
    setIsSearchBarVisible(!isSearchBarVisible);
    dispatch(updateSearchQuery(""));
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <img src={BRAND_LOGO} alt={ALT_TEXT_LOGO_ICON} />
          <h1 className="navbar__container__title">Todos</h1>
        </div>
        <div className="navbar__search-bar">
          {isSearchBarVisible && (
            <input
              onChange={handleSearchInputChange}
              value={searchQuery}
              placeholder="search..."
              className="navbar__search-bar--field"
            ></input>
          )}
          <IconButton
            onClick={setVisibality}
            alt={ALT_TEXT_SEARCH_ICON}
            src={ICON_SEARCH}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
