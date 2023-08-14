import PropTypes from "prop-types";
import "/src/components/Button/index.scss";

function Button({ src, alt, onClick }) {
  return (
    <button onClick={onClick} className="button">
      <img src={src} alt={alt} />
    </button>
  );
}

Button.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;