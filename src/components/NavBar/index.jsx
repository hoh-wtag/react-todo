import {
  BRAND_LOGO,
  ICON_SEARCH,
} from "@utils/constants/icons.js";
import {
  ALT_TEXT_LOGO_ICON,
  ALT_TEXT_SEARCH_ICON,
} from "@utils/constants/texts.js";
import "./index.scss"

const Navbar = () => {
  return (
    <div className="navbar flex align-center justify-between">
      <div className="flex justify-center align-center">
        <img src={BRAND_LOGO} alt={ALT_TEXT_LOGO_ICON} />
        <h1 className="navbar__container__title">Todos</h1>
      </div>
      <img src={ICON_SEARCH} alt={ALT_TEXT_SEARCH_ICON} />
    </div>
  );
};

export default Navbar;
