import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Result() {
  return (
    <Popup
      trigger={<button className="btn btn-secondary"> Results</button>}
      modal
    >
      <ul>
        <li>
          <strong>Packing: </strong> 10mm Raschig glass rings
        </li>
        <li>
          <strong>Column diameter:</strong> 0.83 m
        </li>
        <li>
          <strong>Packing Height:</strong> 0.54 m
        </li>
      </ul>
    </Popup>
  );
}

export default Result;
