import { useState } from "react";

const Calculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    if (!length || !width) {
      alert("Please enter both length and width.");
      return;
    }
    const l = Number(length) * 0.66;
    const w = Number(width) * 0.66;
    setArea(Number(l) * Number(w));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Land Area Calculator (in Sq Ft)</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Enter Length(in kaddi)"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={{ marginRight: "10px", width: "200px" }}
        />
        <input
          type="number"
          placeholder="Enter Width(in kaddi)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          style={{ marginRight: "10px", width: "200px" }}
        />
      </div>
      <button onClick={calculateArea} style={{ marginBottom: "20px" }}>
        Calculate
      </button>
      {area !== null && (
        <div>
          <h2>Area: {area.toFixed(2)} square ft</h2>
          <h2>
            Length: <div>{length} kaddi</div>
            <div>{length * 0.66} ft </div>
          </h2>
          <h2>
            Width:
            <div>{width} kaddi</div>
            <div>
              {width * 0.66} ft {}
            </div>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;
