import React from "react";

const KryComponent = ({ value }) => {
  const convertDegreeToGrad = (degree) => {
    return (degree * 10) / 9;
  };

  const result = convertDegreeToGrad(value).toFixed(2);
  const isTooHigh = value > 100; 

  const resultStyle = {
    color: isTooHigh ? "red" : "black", 
    fontWeight: isTooHigh ? "bold" : "normal"
  };

  return (
    <div>
      <h2>Stopień &rarr; Grad</h2>
      <p>
        {value} stopni to{" "}
        <span style={resultStyle}>{result}</span> gradów.
      </p>
    </div>
  );
};

export default KryComponent;
