import PropTypes from "prop-types";
import "@components/TextButton/index.scss";

function TextButton({ onClick, text }) {
  return (
    <button onClick={onClick} className="textButton">
      {text}
    </button>
  );
}

TextButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default TextButton;
