/* eslint-disable react/prop-types */
// import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Result({ onPress }) {
  return (
    <button className="btn btn-primary" onClick={onPress}>
      {" "}
      Results
    </button>
  );
}

export default Result;
