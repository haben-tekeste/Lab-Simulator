function Procedure() {
  return (
    <div className="procedure">
      <ol>
        <li>
          To initiate the gas absorption simulator, kindly activate it by
          pressing the pump button
        </li>
        <li>
          Modify the parameters by manipulating the valves, you can adjust the
          flow rates accordingly and make your observation of the CO<sub>2</sub>
          , removal rate.
          <ul>
            <li>
              <strong>First, </strong> adjust the{" "}
              <strong>
                CO<sub>2</sub>, valve{" "}
              </strong>
              to your desired flow rate.
            </li>
            <li>
              <strong>Second, </strong>adjust the <strong>Water valve </strong>
              to your desired flow rate.
            </li>
            <li>
              <strong>Optional: </strong>adjust the Air valve to your desired
              flow rate.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Procedure;
