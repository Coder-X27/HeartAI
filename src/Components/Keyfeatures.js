import React from "react";
import FeatureDescriptionNode from "./FeatureDescriptionNode";
import FeatureNode from "./FeatureNode";
import ReactFlow, { MarkerType } from "react-flow-renderer";

const nodeTypes = {
  feature: FeatureNode,
  featuredescription: FeatureDescriptionNode,
};

const featuresNodesHorizontal = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Agnostic Graph-Based Language" },
    type: "feature",
  },
  {
    id: "2",
    position: { x: 600, y: 0 },
    data: {
      label:
        "Heart breaks barriers, serving both AI and human creators with a language that adapts to diverse application.",
    },
    type: "featuredescription",
  },
  {
    id: "3",
    position: { x: 0, y: 100 },
    data: { label: "Imagination-Driven Programming", flag: true },
    type: "feature",
  },
  {
    id: "4",
    position: { x: 600, y: 100 },
    data: {
      label:
        "Users only need to imagine their goals; Mind interprets and executes the rest.",
    },
    type: "featuredescription",
  },
  {
    id: "5",
    position: { x: 0, y: 200 },
    data: {
      label: "Intuitive Drag and Drop Editor",
    },
    type: "feature",
  },
  {
    id: "6",
    position: { x: 600, y: 200 },
    data: {
      label:
        "Craft and modify algorithms visually for enhanced clarity and ease of use.",
    },
    type: "featuredescription",
  },
];

const featuresEdges = [
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
  {
    id: "e5-6",
    source: "5",
    target: "6",
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

const featuresNodesVertical = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Agnostic Graph-Based Language", vertical: true },
    type: "feature",
  },
  {
    id: "2",
    position: { x: 0, y: 140 },
    data: {
      label:
        "Heart breaks barriers, serving both AI and human creators with a language that adapts to diverse application.",
      vertical: true,
    },
    type: "featuredescription",
  },
  {
    id: "3",
    position: { x: 0, y: 270 },
    data: {
      label: "Imagination-Driven Programming",
      flag: true,
      vertical: true,
    },
    type: "feature",
  },
  {
    id: "4",
    position: { x: 0, y: 420 },
    data: {
      label:
        "Users only need to imagine their goals; Mind interprets and executes the rest.",
      vertical: true,
    },
    type: "featuredescription",
  },
  {
    id: "5",
    position: { x: 0, y: 550 },
    data: {
      label: "Intuitive Drag and Drop Editor",
      vertical: true,
    },
    type: "feature",
  },
  {
    id: "6",
    position: { x: 0, y: 680 },
    data: {
      label:
        "Craft and modify algorithms visually for enhanced clarity and ease of use.",
      vertical: true,
    },
    type: "featuredescription",
  },
];

const Keyfeatures = () => {
  const isMobile = window.innerWidth < 700;
  return (
    <div style={{ maxWidth: '100%' }}>
      <div className="keyfeatures">
        <h1>Key Features</h1>
      </div>
      <div
        style={{
          height: isMobile ? '600px' : '400px',
          padding: '0px 20px',
        }}
      >
        <ReactFlow
          nodes={isMobile ? featuresNodesVertical : featuresNodesHorizontal}
          edges={featuresEdges}
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

export default Keyfeatures;
