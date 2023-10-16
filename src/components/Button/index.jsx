import PropTypes from "prop-types";
import "@components/Button/index.scss";

function Button({ src, imageAltText, onClick }) {
  return (
    <button onClick={onClick} className="button">
      <img src={src} alt={imageAltText} />
    </button>
  );
}

Button.propTypes = {
  src: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
