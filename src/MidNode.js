import React from "react";
import { Handle } from "reactflow";

const MidNode = ({ id, data }) => {
  return (
    <div
      style={{
        padding: "20px 25px 20px 25px",
        background: "#252729",
        borderRadius: "5px",
        border: "1px solid gray",
        position: "relative",
        color: 'white'
      }}
    >
      {data.vertical ? (
        <>
          <Handle type="target" position="top" style={{ background: "#555" }} />
          <Handle type="source" position="bottom" style={{ background: "#555" }} />
        </>
      ) : (
        <>
          <Handle type="target" position="left" style={{ background: "#555" }} />
          <Handle type="source" position="right" style={{ background: "#555" }} />
        </>
      )}
      <button
        style={{ position: "absolute", top: 0, right: 0, borderRadius: 5, fontSize: 12, backgroundColor: '#555', color: 'white', border: 'none' }}
      >
        x
      </button>
      <p style={{ fontSize: (data.vertical ? '20px' : '14px'), margin: 0 }}>{data.label}</p>
      <p style={{ fontSize: (data.vertical ? '18px' : '14px'), margin: 0 }}><b>{data.examples}</b></p>
    </div>
  );
};

export default MidNode;
