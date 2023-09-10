import PropTypes from "prop-types";
import "@components/IconButton/index.scss";

function IconButton({ src, alt, onClick }) {
  return <img src={src} alt={alt} onClick={onClick} className="iconButton" />;
}

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
