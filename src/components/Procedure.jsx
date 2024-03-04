import React from "react";

function Procedure() {
  return (
    <div>
      <ol>
        <li>
          To initiate the gas absorption simulator, kindly activate it by
          pressing the pump button
        </li>
        <li>
          Modify the parameters by manipulating the valves, you can adjust the
          flow rates accordingly and make your observation of the CO, removal
          rate.
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
        <li>
          Monitor the fluid dynamics and observe alterations in the final CO,
          rate as you adjust these values.
        </li>
        <li>
          Record your data by clicking "--" tab to get a table with your
          readings, please take note of them!
        </li>
      </ol>
      <br />
      <p>
        <i>Note: </i>
        The simulator reflects the behaviour of the actual column in the lab,
        mathematical calculations were done based on actual experimental data,
        for any suggestions please email nour.addam@aurak.ac.ae.
      </p>
    </div>
  );
}

export default Procedure;
