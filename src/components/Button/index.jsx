import PropTypes from "prop-types";
import "/src/components/Button/index.scss";

function Button({ src, onClick }) {
  return (
    <button onClick={onClick} className="button">
      <img src={src} />
    </button>
  );
}

Button.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
