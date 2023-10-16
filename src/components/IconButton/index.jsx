import PropTypes from "prop-types";
import "@components/IconButton/index.scss";

function IconButton({ src, imageAltText, onClick }) {
  return (
    <button onClick={onClick} className="iconButton">
      <img src={src} alt={imageAltText} />
    </button>
  );
}

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
