import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { prequiz } from "../data/quiz";
import Quiz from "./Quiz";

export default function PreQuiz() {
  return (
    <Popup
      trigger={<button className="btn btn-primary"> Pre Quiz</button>}
      modal
    >
      <Quiz quiz={prequiz} />
    </Popup>
  );
}
