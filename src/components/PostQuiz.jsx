import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Quiz from "./Quiz";
import { postquiz } from "../data/quiz";

export default function PostQuiz() {
  return (
    <Popup
      trigger={<button className="btn btn-primary"> Post Quiz</button>}
      modal
    >
      <Quiz quiz={postquiz} />
    </Popup>
  );
}
