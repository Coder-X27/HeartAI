import React from "react";
import { Handle } from "react-flow-renderer";

const RoadmapNode = ({ id, data }) => {
  const commonStyle = {
    padding: "0px 25px 0px 25px",
    borderRadius: "5px",
    border: "0px solid #25252555",
    position: "relative",
    color: "white",
    width: 270,
    textAlign: "center",
  };

  const titleStyle = {
    width: 220,
    margin: "0 auto",
    textAlign: "center",
  };

  return (
    <div style={commonStyle}>
      <Handle
        type="target"
        position="top"
        style={{
          background: "transparent",
          borderColor: "transparent",
          width: 0,
        }}
      />
      <div style={titleStyle} className="roadmap-title">
        {data.title}
      </div>
      <div className="roadmap-description mt-3 text-left">
        {data.description}
      </div>
      <Handle
        type="source"
        position="bottom"
        style={{
          background: "transparent",
          borderColor: "transparent",
          width: 0,
        }}
      />
    </div>
  );
};

export default RoadmapNode;
