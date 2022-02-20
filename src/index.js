import React, { Component, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import {
  GraphView // required
} from "react-digraph";
import Modal from "./Modal";
import {
  default as nodeConfig,
  EMPTY_EDGE_TYPE,
  CUSTOM_EMPTY_TYPE,
  NODE_KEY,
  POLY_TYPE,
  SPECIAL_CHILD_SUBTYPE,
  SPECIAL_EDGE_TYPE,
  SPECIAL_TYPE,
  SKINNY_TYPE,
  TEXTBOX_TYPE
} from "./config";

import "./styles.css";
const sample = {
  edges: [
    {
      handleText: "",
      source: "start1",
      target: "a1",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "",
      source: "a1",
      target: "a2",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "",
      source: "a2",
      target: "a4",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "",
      source: "a1",
      target: "a3",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "",
      source: "a3",
      target: "a4",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "",
      source: "a1",
      target: "a5",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "",
      source: "a4",
      target: "a1",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "",
      source: "a1",
      target: "a6",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "",
      source: "a1",
      target: "a7",
      type: EMPTY_EDGE_TYPE
    }
  ],
  nodes: [
    {
      id: "start1",
      title: "Start (0)",
      type: CUSTOM_EMPTY_TYPE
    },
    {
      id: "a1",
      title: "Node A (1)",
      type: CUSTOM_EMPTY_TYPE,
      x: 258.3976135253906,
      y: 331.9783248901367
    },
    {
      id: "a2",
      //subtype: SPECIAL_CHILD_SUBTYPE,
      title: "Node B (2)",
      type: CUSTOM_EMPTY_TYPE,
      x: 593.9393920898438,
      y: 260.6060791015625
    },
    {
      id: "a3",
      title: "Node C (3)",
      type: CUSTOM_EMPTY_TYPE,
      x: 237.5757598876953,
      y: 61.81818389892578
    },
    {
      id: "a4",
      title: "Node D (4)",
      type: CUSTOM_EMPTY_TYPE,
      x: 600.5757598876953,
      y: 600.81818389892578
    },
    {
      id: "a5",
      title: "Node E (5)",
      type: CUSTOM_EMPTY_TYPE,
      x: 50.5757598876953,
      y: 500.81818389892578
    },
    {
      id: "a6",
      title: "Node E (6)",
      type: CUSTOM_EMPTY_TYPE,
      x: 300,
      y: 600
    },
    {
      id: "a7",
      title: "Node F (7)",
      type: CUSTOM_EMPTY_TYPE,
      x: 0,
      y: 300
    }
  ]
};

class Graph extends Component {
  constructor(props) {
    super(props);
    this.customNodeRef = React.createRef();
    this.state = {
      graph: sample,
      selected: {}
    };
  }

  renderNode = (nodeRef, data, id, selected, hovered) => {
    return (
      <g x="0" y="0" className={`shape`}>
        {!selected ? null : (
          <foreignObject
            style={{ pointerEvents: "all" }}
            width="100"
            height="50"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <Modal
              id={`${id}-text`}
              onClick={() => {
                console.log("onClick text");
              }}
            />
          </foreignObject>
        )}
        <use
          className={`node ${hovered ? "hovered" : ""} ${
            selected ? "selected" : ""
          }`}
          x="-77"
          y="-77"
          width="154"
          height="154"
          xlinkHref={`#${data.type}`}
        >
          <svg viewBox="-27 0 154 154" id={data.type} width="154" height="154">
            <rect
              transform="translate(50) rotate(45)"
              width="109"
              height="109"
            />
          </svg>
        </use>
      </g>
    );
  };
  // onSelectEdge = (node, event) => {
  //   //console.log("test select edge");
  // };

  // onUpdateNode = () => true;

  // onDeleteNode = (...args) => {
  //   this.setState({});
  // };

  getNodeIndex(searchNode) {
    return this.state.graph.nodes.findIndex(node => {
      return node[NODE_KEY] === searchNode[NODE_KEY];
    });
  }

  // Helper to find the index of a given edge
  getEdgeIndex(searchEdge) {
    return this.state.graph.edges.findIndex(edge => {
      return (
        edge.source === searchEdge.source && edge.target === searchEdge.target
      );
    });
  }

  // Given a nodeKey, return the corresponding node
  getViewNode(nodeKey) {
    const searchNode = {};

    searchNode[NODE_KEY] = nodeKey;
    const i = this.getNodeIndex(searchNode);

    return this.state.graph.nodes[i];
  }

  addStartNode = e => {
    const graph = this.state.graph;

    // using a new array like this creates a new memory reference
    // this will force a re-render
    graph.nodes = [
      {
        id: Date.now(),
        title: "Node A",
        type: SPECIAL_TYPE,
        x: e ? e.screenX : 0, //Figure out the correct coordinates to drop
        y: e ? e.screenY : 0
      },
      ...this.state.graph.nodes
    ];
    this.setState({
      graph
    });
  };

  deleteStartNode = () => {
    console.log("DELETE NODE");
    const graph = this.state.graph;

    graph.nodes.splice(0, 1);
    // using a new array like this creates a new memory reference
    // this will force a re-render
    graph.nodes = [...this.state.graph.nodes];
    this.setState({
      graph
    });
  };

  handleChange = event => {
    this.setState(
      {
        totalNodes: parseInt(event.target.value || "0", 10)
      },
      this.makeItLarge
    );
  };

  /*
   * Handlers/Interaction
   */

  // Called by 'drag' handler, etc..
  // to sync updates from D3 with the graph
  onUpdateNode = viewNode => {
    const graph = this.state.graph;
    const i = this.getNodeIndex(viewNode);

    graph.nodes[i] = viewNode;
    this.setState({ graph });
  };

  // Node 'mouseUp' handler
  onSelectNode = (viewNode, event) => {
    if (event) {
      const { id = "" } = event.target;
      if (id.includes("text")) {
        document.getElementById(event.target.id).click();
      }

      // Deselect events will send Null viewNode
      this.setState({ selected: viewNode });
    }
  };

  // Edge 'mouseUp' handler
  onSelectEdge = viewEdge => {
    this.setState({ selected: viewEdge });
  };

  // Updates the graph with a new node
  onCreateNode = (x, y) => {
    const graph = this.state.graph;
    console.log("ADD");
    // This is just an example - any sort of logic
    // could be used here to determine node type
    // There is also support for subtypes. (see 'sample' above)
    // The subtype geometry will underlay the 'type' geometry for a node


    //const type = Math.random() < 0.25 ? SPECIAL_TYPE : CUSTOM_EMPTY_TYPE;
    const type = CUSTOM_EMPTY_TYPE;

    const viewNode = {
      id: Date.now(),
      title: "nothing",
      type,
      x,
      y
    };

    graph.nodes = [...graph.nodes, viewNode];
    this.setState({ graph });
  };
  onCreateTextbox = (x, y) => {
    const graph = this.state.graph;
    console.log("ADD TEXTBOX");
    // This is just an example - any sort of logic
    // could be used here to determine node type
    // There is also support for subtypes. (see 'sample' above)
    // The subtype geometry will underlay the 'type' geometry for a node
    const type = TEXTBOX_TYPE;

    const viewNode = {
      id: Date.now(),
      title: this._name.value,
      type: TEXTBOX_TYPE,
      x,
      y
    };

    graph.nodes = [...graph.nodes, viewNode];
    this.setState({ graph });
  };
  // Deletes a node from the graph
  onDeleteNode = (viewNode, nodeId, nodeArr) => {
    const graph = this.state.graph;
    console.log("DELETE");
    // Delete any connected edges
    const newEdges = graph.edges.filter((edge, i) => {
      return (
        edge.source !== viewNode[NODE_KEY] && edge.target !== viewNode[NODE_KEY]
      );
    });

    graph.nodes = nodeArr;
    graph.edges = newEdges;

    this.setState({ graph, selected: null });
  };

  // Creates a new node between two edges
  onCreateEdge = (sourceViewNode, targetViewNode) => {
    const graph = this.state.graph;
    // This is just an example - any sort of logic
    // could be used here to determine edge type
    const type =
      sourceViewNode.type === SPECIAL_TYPE
        ? SPECIAL_EDGE_TYPE
        : EMPTY_EDGE_TYPE;

    const viewEdge = {
      source: sourceViewNode[NODE_KEY],
      target: targetViewNode[NODE_KEY],
      type
    };

    // Only add the edge when the source node is not the same as the target
    if (viewEdge.source !== viewEdge.target) {
      graph.edges = [...graph.edges, viewEdge];
      this.setState({
        graph,
        selected: viewEdge
      });
    }
  };

  // Called when an edge is reattached to a different target.
  onSwapEdge = (sourceViewNode, targetViewNode, viewEdge) => {
    const graph = this.state.graph;
    const i = this.getEdgeIndex(viewEdge);
    const edge = JSON.parse(JSON.stringify(graph.edges[i]));

    edge.source = sourceViewNode[NODE_KEY];
    edge.target = targetViewNode[NODE_KEY];
    graph.edges[i] = edge;
    // reassign the array reference if you want the graph to re-render a swapped edge
    graph.edges = [...graph.edges];

    this.setState({
      graph,
      selected: edge
    });
  };

  onDeleteEdge = (viewEdge, edges) => {
    const graph = this.state.graph;

    graph.edges = edges;
    this.setState({
      graph,
      selected: null
    });
  };

  onUndo = () => {
    // Not implemented
    console.warn("Undo is not currently implemented in the example.");
    // Normally any add, remove, or update would record the action in an array.
    // In order to undo it one would simply call the inverse of the action performed. For instance, if someone
    // called onDeleteEdge with (viewEdge, i, edges) then an undelete would be a splicing the original viewEdge
    // into the edges array at position i.
  };

  // Called when an edge is deleted
  renderNodeText(data) {
    return (
      <foreignObject x="-30" y="-30" width="2000" height="50">
        <div className="node">
          <p style={{ whiteSpace: "nowrap" }}>{data.title}</p>
        </div>
      </foreignObject>
    );
  }

  onCopySelected = () => {
    if (this.state.selected.source) {
      console.warn("Cannot copy selected edges, try selecting a node instead.");

      return;
    }

    const x = this.state.selected.x + 10;
    const y = this.state.selected.y + 10;

    this.setState({
      copiedNode: { ...this.state.selected, x, y }
    });
  };

  onPasteSelected = () => {
    if (!this.state.copiedNode) {
      console.warn(
        "No node is currently in the copy queue. Try selecting a node and copying it with Ctrl/Command-C"
      );
    }

    const graph = this.state.graph;
    const newNode = { ...this.state.copiedNode, id: Date.now() };

    graph.nodes = [...graph.nodes, newNode];
    this.forceUpdate();
  };

  handleChangeLayoutEngineType = event => {
    this.setState({
      layoutEngineType: event.target.value
    });
  };

  onSelectPanNode = event => {
    if (this.GraphView) {
      this.GraphView.panToNode(event.target.value, true);
    }
  };

  /* Define custom graph editing methods here */

  render() {
    const nodes = this.state.graph.nodes;
    const edges = this.state.graph.edges;
    const selected = this.state.selected;

    return (
      <div id="graph" style={{ height: "50rem" }}>
        <input
          type="text"
          placeholder={"input text here"}
          ref={input => (this._name = input)}
        />
        <button onClick={this.onCreateTextbox}>Create Textbox</button>
        <GraphView
          showGraphControls={true}
          gridSize="100rem"
          gridDotSize={1}
          renderNodeText={false}
          ref="GraphView"
          nodeKey={NODE_KEY}
          nodes={nodes}
          edges={edges}
          selected={selected}
          nodeTypes={nodeConfig.NodeTypes}
          nodeSubtypes={nodeConfig.NodeSubtypes}
          edgeTypes={nodeConfig.NodeTypes}
          onSelectNode={this.onSelectNode}
          onCreateNode={this.onCreateNode}
          onUpdateNode={this.onUpdateNode}
          onDeleteNode={this.onDeleteNode}
          onSelectEdge={this.onSelectEdge}
          onCreateEdge={this.onCreateEdge}
          onSwapEdge={this.onSwapEdge}
          onDeleteEdge={this.onDeleteEdge}
          readOnly={false}
          maxTitleChars={100000}
          //renderNode={this.renderNode}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Graph />, rootElement);
