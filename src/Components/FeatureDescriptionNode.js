import React from "react";
import { Handle } from "react-flow-renderer";

const FeatureDescriptionNode = ({ id, data }) => {
  return (
    <div
      style={{
        padding: "20px 25px 20px 25px",
        background: "#000",
        borderRadius: "5px",
        border: "1px none transparent",
        position: "relative",
        color: '#c5c5c5',
        width: 270,
        fontWeight: 200,
      }}
      className="text-left"
    >
      {data.vertical ? (
        <Handle type="target" position="top" style={{ background: "transparent", borderColor: "transparent", width: 0 }} />
      ) : (
        <Handle type="target" position="left" style={{ background: "transparent", borderColor: "transparent", width: 0 }} />
      )}
      <p style={{fontSize: '14px', margin: 0}}>{data.label}</p>
    </div>
  );
};

export default FeatureDescriptionNode;
