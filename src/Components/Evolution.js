import React from 'react'
import MidNode from "./MidNode";
import ReactFlow, { MarkerType } from "react-flow-renderer";

const nodeTypes = {
    middle: MidNode
  };

const initialNodesHorizontal = [
  {
    id: "1",
    position: { x: 100, y: 0 },
    data: { label: "Machine Bytecode", examples: "0001011010100100" },
    type: "middle",
  },
  {
    id: "2",
    position: { x: 350, y: 0 },
    data: { label: "Assembly", examples: "x86 ARM MIPS 6502 Z80" },
    type: "middle",
  },
  {
    id: "3",
    position: { x: 650, y: 0 },
    data: {
      label: "High Level Programming Languages",
      examples: "C/C++ Python Javascript",
    },
    type: "middle",
  },
  {
    id: "4",
    position: { x: 1000, y: 0 },
    data: { label: "Meta programming Language", examples: "Heart" },
    type: "middle",
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#626262",
    },
    style: {
      strokeWidth: 2,
      stroke: "#FFF",
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#626262",
    },
    style: {
      strokeWidth: 2,
      stroke: "#FFF",
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "smoothstep",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#626262",
    },
    style: {
      strokeWidth: 2,
      stroke: "#FFF",
    },
  },
];

const initialNodesVertical = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      label: "Machine Bytecode",
      examples: "0001011010100100",
      vertical: true,
    },
    type: "middle",
  },
  {
    id: "2",
    position: { x: 0, y: 150 },
    data: {
      label: "Assembly",
      examples: "x86 ARM MIPS 6502 Z80",
      vertical: true,
    },
    type: "middle",
  },
  {
    id: "3",
    position: { x: 0, y: 300 },
    data: {
      label: "High Level Programming Languages",
      examples: "C/C++ Python Javascript",
      vertical: true,
    },
    type: "middle",
  },
  {
    id: "4",
    position: { x: 0, y: 450 },
    data: {
      label: "Meta programming Language",
      examples: "Heart",
      vertical: true,
    },
    type: "middle",
  },
];

const Evolution = () => {
    const isMobile = window.innerWidth < 700;
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }} className='container2'>
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <h1>The Evolution of Programming Languages</h1>
      </div>
      <div
        style={{
          height: isMobile ? '600px' : '400px',
          padding: '0px 20px',
        }}
        className='evolutionchart'
      >
        <ReactFlow
          nodes={isMobile ? initialNodesVertical : initialNodesHorizontal}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          style={{ height: '100%' }}
          panOnDrag={false} 
          zoomOnScroll={false} 
          zoomOnDoubleClick={false}
          paneMoveable={false} 
          elementsSelectable={false} 
          nodesDraggable={false}
          nodesConnectable={false} 
          fitView={false} 
          preventScrolling={true} 
        />
      </div>
    </div>
  );
};

export default Evolution;