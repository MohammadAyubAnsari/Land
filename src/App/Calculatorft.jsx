import { useState } from "react";

const Calculatorft = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    if (!length || !width) {
      alert("Please enter both length and width.");
      return;
    }
    const l = Number(length) * 1.5;
    const w = Number(width) * 1.5;
    setArea(Number(l) * Number(w));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Land Area Calculator (in Kaddi)</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Enter Length(in ft)"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={{ marginRight: "10px", width: "200px" }}
        />
        <input
          type="number"
          placeholder="Enter Width(in ft)"
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
          <h2>Area: {area.toFixed(2)} Sq kaddi</h2>
          <h2>
            Length: <div>{length} ft</div>
            <div>{length * 1.5} kaddi </div>
          </h2>
          <h2>
            Width:
            <div>{width} ft</div>
            <div>
              {width * 1.5} kaddi {}
            </div>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Calculatorft;
