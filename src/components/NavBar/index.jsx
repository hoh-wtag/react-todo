import {
  LOGO,
  SEARCH,
} from "/src/utils/constants/icons.js";
import "./index.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex navbar__container align-center justify-between">
        <div className="flex justify-center align-center ">
          <img src={LOGO} />
          <h1 className="navbar__container__title">Todos</h1>
        </div>
        <img src={SEARCH} />
      </div>
    </div>
  );
};

export default Navbar;
