import {
  BRAND_LOGO,
  ICON_SEARCH,
} from "/src/utils/constants/icons.js";
import "./index.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex navbar__container align-center justify-between">
        <div className="flex justify-center align-center ">
          <img src={BRAND_LOGO} />
          <h1 className="navbar__container__title">Todos</h1>
        </div>
        <img src={ICON_SEARCH} />
      </div>
    </div>
  );
};

export default Navbar;
