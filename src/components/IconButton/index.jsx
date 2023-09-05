import PropTypes from "prop-types";
import "@components/IconButton/index.scss";

function IconButton({ src, alt, onClick }) {
  return (
    <button onClick={onClick} className="iconButton">
      <img src={src} alt={alt} />
    </button>
  );
}

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
