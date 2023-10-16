import PropTypes from "prop-types";
import "@components/TextButton/index.scss";

function TextButton({ onClick, buttonText }) {
  return (
    <button onClick={onClick} className="textButton">
      {buttonText}
    </button>
  );
}

TextButton.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
};

export default TextButton;
