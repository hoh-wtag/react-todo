import { useDispatch, useSelector } from "react-redux";
import {
  BRAND_LOGO,
  ICON_SEARCH,
} from "@utils/constants/icons.js";
import {
  ALT_TEXT_LOGO_ICON,
  ALT_TEXT_SEARCH_ICON,
} from "@utils/constants/texts.js";
import { updateSearchQuery } from "@store/actions";

import "./index.scss"

const Navbar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQuery);
  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    dispatch(updateSearchQuery(query));
  };

  return (
    <div className="navbar flex align-center justify-between">
      <div className="flex justify-center align-center">
        <img src={BRAND_LOGO} alt={ALT_TEXT_LOGO_ICON} />
        <h1 className="navbar__container__title">Todos</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by task title..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <img src={ICON_SEARCH} alt={ALT_TEXT_SEARCH_ICON} />
      </div>
    </div>
  );
};

export default Navbar;
