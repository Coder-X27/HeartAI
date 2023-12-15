import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import ReactFlow, { MarkerType } from "react-flow-renderer";
import RoadmapNode from "./RoadmapNode";

const nodeTypes = {
  roadmap: RoadmapNode,
};

const roadmapNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      title: "Proof of Concept (POC)",
      description:
        "Mind kicks off with a powerful Proof of Concept in cryptocurrency trading, MindTrade. Demonstrating the first use case of the language and the intrisic potential power of Mind.",
    },
    type: "roadmap",
  },
  {
    id: "2",
    position: { x: 0, y: 200 },
    data: {
      title: "Minimum Viable Product (MVP)",
      description:
        "MindTrade takes center stage, allowing users to develop and deploy trading strategies on mainnet. This leap forward will bring Mind in a practical scenario.",
    },
    type: "roadmap",
  },
  {
    id: "3",
    position: { x: 0, y: 400 },
    data: {
      title: "Marketplace",
      description:
        "Monetize your strategies on the Marketplace, ensuring privacy control. Share high-level strategy overviews for a transparent exchange of valuable strategies within the Mind community.",
    },
    type: "roadmap",
  },
  {
    id: "4",
    position: { x: 0, y: 600 },
    data: {
      title: "Feature Store",
      description:
        "Unlock advanced capabilities with the Feature Store, the gateway to expanding and diversifying Mind's functonalities. Access a variety of nodes for increased language versatility.",
    },
    type: "roadmap",
  },
  {
    id: "5",
    position: { x: 0, y: 800 },
    data: {
      title: "Continuous Improvement",
      description:
        "Mind and MindTrade will continuously evolve, focusing on enhancing features and broadening its expressive power. Regular updates keep Mind at the forefront of technology to meet evolving user needs.",
    },
    type: "roadmap",
  },
  {
    id: "6",
    position: { x: 0, y: 1000 },
    data: {
      title: "Exploring Future Applications",
      description:
        "Beyond trading, Mind explores applications in various domains of existence such as Supply Chain Management, Domotic, Agricultural Technology and more. Join us as we redefine possibilities and shape the future together.",
    },
    type: "roadmap",
  },
];

const roadmapNodesMobile = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      title: "Proof of Concept (POC)",
      description:
        "Mind kicks off with a powerful Proof of Concept in criptocurrency trading, MindTrade. Demonstrating the first use case of the language and the intrisic potential power of Mind.",
    },
    type: "roadmap",
  },
  {
    id: "2",
    position: { x: 0, y: 300 },
    data: {
      title: "Minimum Viable Product (MVP)",
      description:
        "MindTrade takes center stage, allowing users to develop and deploy trading strategies on mainnet. This leap forward will bring Mind in a practical scenario.",
    },
    type: "roadmap",
  },
  {
    id: "3",
    position: { x: 0, y: 600 },
    data: {
      title: "Marketplace",
      description:
        "Monetize your strategies on the Marketplace, ensuring privacy control. Share high-level strategy overviews for a transparent exchange of valuable strategies within the Mind community.",
    },
    type: "roadmap",
  },
  {
    id: "4",
    position: { x: 0, y: 900 },
    data: {
      title: "Feature Store",
      description:
        "Unlock advanced capabilities with the Feature Store, the gateway to expanding and diversifying Mind's functonalities. Access a variety of nodes for increased language versatility.",
    },
    type: "roadmap",
  },
  {
    id: "5",
    position: { x: 0, y: 1200 },
    data: {
      title: "Continuous Improvement",
      description:
        "Mind and MindTrade will continuously evolve, focusing on enhancing features and broadening its expressive power. Regular updates keep Mind at the forefront of technology to meet evolving user needs.",
    },
    type: "roadmap",
  },
  {
    id: "6",
    position: { x: 0, y: 1550 },
    data: {
      title: "Exploring Future Applications",
      description:
        "Beyond trading, Mind explores applications in various domains of existence such as Supply Chain Management, Domotic, Agricultural Technology and more. Join us as we redefine possibilities and shape the future together.",
    },
    type: "roadmap",
  },
];

const roadmapEdges = [
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
    id: "e1-2",
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
    id: "e1-2",
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
    id: "e1-2",
    source: "4",
    target: "5",
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
    id: "e1-2",
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

const particlesOptions = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
};

const Roadmap = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 700);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="roadmapcontainer">
        <div className="roadmap">
          <h1>Roadmap</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
          }}
        >
          {isMobile ? (
            <>
              <div style={{ marginBottom: "20px" }}>
                <Particles
                  height="350px"
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={particlesOptions}
                />
              </div>
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <ReactFlow
                  nodes={roadmapNodesMobile}
                  edges={roadmapEdges}
                  nodeTypes={nodeTypes}
                  style={{ height: "2200px", width: "100%" }}
                  panOnDrag={false}
                  zoomOnScroll={false}
                  zoomOnDoubleClick={false}
                  paneMoveable={false}
                  elementsSelectable={false}
                  nodesDraggable={false}
                  nodesConnectable={false}
                  fitView={false}
                  preventScrolling={false}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <Particles
                  height="350px"
                  id="tsparticles1"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={particlesOptions}
                />
              </div>
            </>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <Particles
                  height="1500px"
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={particlesOptions}
                />
              </div>
              <div style={{ width: "60%", minWidth: "300px", display: "flex", justifyContent: "center" }}>
                <ReactFlow
                  nodes={roadmapNodes}
                  edges={roadmapEdges}
                  nodeTypes={nodeTypes}
                  style={{
                    height: "1500px",
                    minWidth: "300px",
                  }}
                  panOnDrag={false}
                  zoomOnScroll={false}
                  zoomOnDoubleClick={false}
                  paneMoveable={false}
                  elementsSelectable={false}
                  nodesDraggable={false}
                  nodesConnectable={false}
                  fitView={false}
                  preventScrolling={false} // Set the default position
                />
              </div>
              <div>
                <Particles
                  height="1500px"
                  id="tsparticles1"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={particlesOptions}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

};

export default Roadmap;
