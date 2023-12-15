import React from "react";
import { Handle } from "react-flow-renderer";

const FeatureNode = ({ id, data }) => {
  const commonStyle = {
    padding: "20px 25px 20px 25px",
    borderRadius: "5px",
    border: "1px solid #25252555",
    position: "relative",
    color: "white",
    textAlign: "center",
    width: 270
  };

  const normalStyle = {
    ...commonStyle,
    background: 'linear-gradient(to right, #000000 0%, #434343 50%, #656565 100%)',
  };

  const hoverStyle = {
    ...commonStyle,
    background: 'linear-gradient(to right, #656565 0%, #434343 50%, #000000 100%)',
  };

  const style = data.flag ? hoverStyle : normalStyle;

  return (
    <div style={style}>
      {data.vertical ? (
        <Handle type="source" position="bottom" style={{ background: "#555" }} />
      ) : (
        <Handle type="source" position="right" style={{ background: "#555" }} />
      )}
      <p style={{ fontSize: "14px", margin: 0 }}>{data.label}</p>
    </div>
  );
};

export default FeatureNode;
