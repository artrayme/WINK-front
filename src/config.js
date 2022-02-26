// @flow
/*
  Copyright(c) 2018 Uber Technologies, Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
          http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

/*
  Example config for GraphView component
*/
import React from "react";

export const NODE_KEY = "id"; // Key used to identify nodes

// These keys are arbitrary (but must match the config)
// However, GraphView renders text differently for empty types
// so this has to be passed in if that behavior is desired.
export const EMPTY_TYPE = "empty";
export const SC_GENERAL_NODE = "generalNode"; // Empty node type
export const SC_CLASS_NODE = "classNode";
export const SPECIAL_TYPE = "special";
export const SC_LINK = "linkNode";
export const SPECIAL_CHILD_SUBTYPE = "specialChild";
export const EMPTY_EDGE_TYPE = "emptyEdge";
export const SPECIAL_EDGE_TYPE = "specialEdge";
export const TEXTBOX_TYPE = "textbox";

export const nodeTypes = [EMPTY_TYPE, SC_GENERAL_NODE, SC_CLASS_NODE, SPECIAL_TYPE, SC_LINK, TEXTBOX_TYPE];
export const edgeTypes = [EMPTY_EDGE_TYPE, SPECIAL_EDGE_TYPE];

const EmptyNodeShape = (<symbol viewBox="0 0 154 154" width="154" height="154" id="emptyNode">
    <circle cx="77" cy="77" r="76"/>
</symbol>);

const GeneralNode = (
    <symbol viewBox="0 0 30 30" width="34" height="34" id="generalNode">
        <circle
            cx="15"
            cy="15"
            r="10"
            strokeWidth="2"
        />
    </symbol>
);

const ClassNode = (
    <symbol viewBox="0 0 30 30" width="34" height="34" id="classNode">

        {/*Class Node in SVG-format*/}
        {/*<svg width="88px" height="88px" viewBox="0 0 88 72" xmlns="http://www.w3.org/2000/svg">*/}
        {/*    <g>*/}
        {/*        <path fill="#000000" d="M12 21.75C10.0716 21.75 8.18657 21.1782 6.58319 20.1068C4.97982 19.0355 3.73013 17.5127 2.99218 15.7312C2.25422 13.9496 2.06114 11.9892 2.43735 10.0979C2.81355 8.20655 3.74215 6.46927 5.10571 5.10571C6.46928 3.74214 8.20656 2.81355 10.0979 2.43734C11.9892 2.06113 13.9496 2.25422 15.7312 2.99217C17.5127 3.73013 19.0355 4.97981 20.1068 6.58319C21.1782 8.18657 21.75 10.0716 21.75 12C21.7474 14.585 20.7193 17.0635 18.8914 18.8914C17.0635 20.7193 14.5851 21.7473 12 21.75ZM12 3.75C10.3683 3.75 8.77326 4.23385 7.41655 5.14037C6.05984 6.04689 5.00242 7.33537 4.378 8.84286C3.75358 10.3503 3.5902 12.0091 3.90853 13.6095C4.22685 15.2098 5.01259 16.6798 6.16637 17.8336C7.32016 18.9874 8.79017 19.7731 10.3905 20.0915C11.9909 20.4098 13.6497 20.2464 15.1571 19.622C16.6646 18.9976 17.9531 17.9402 18.8596 16.5835C19.7661 15.2267 20.25 13.6317 20.25 12C20.2474 9.81277 19.3773 7.71589 17.8307 6.16929C16.2841 4.62269 14.1872 3.75264 12 3.75Z"/>*/}
        {/*        <path fill="#000000" d="M6,16 L6,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.44771525 3.44771525,6 4,6 L6,6 L6,4 C6,3.44771525 6.44771525,3 7,3 C7.55228475,3 8,3.44771525 8,4 L8,6 L16,6 L16,4 C16,3.44771525 16.4477153,3 17,3 C17.5522847,3 18,3.44771525 18,4 L18,6 L20,6 C20.5522847,6 21,6.44771525 21,7 C21,7.55228475 20.5522847,8 20,8 L18,8 L18,16 L20,16 C20.5522847,16 21,16.4477153 21,17 C21,17.5522847 20.5522847,18 20,18 L18,18 L18,20 C18,20.5522847 17.5522847,21 17,21 C16.4477153,21 16,20.5522847 16,20 L16,18 L8,18 L8,20 C8,20.5522847 7.55228475,21 7,21 C6.44771525,21 6,20.5522847 6,20 L6,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 L6,16 Z M8,16 L16,16 L16,8 L8,8 L8,16 Z"/>*/}
        {/*    </g>*/}
        {/*</svg>*/}

        <circle
            cx="15"
            cy="15"
            r="10"
            strokeWidth="2"
        />

        {/*<path*/}
        {/*    cx="15"*/}
        {/*    cy="15"*/}
        {/*    fill="#000000"*/}
        {/*    d={"M6,16 L6,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.44771525 3.44771525,6 4,6 L6,6 L6,4 C6,3.44771525 6.44771525,3 7,3 C7.55228475,3 8,3.44771525 8,4 L8,6 L16,6 L16,4 C16,3.44771525 16.4477153,3 17,3 C17.5522847,3 18,3.44771525 18,4 L18,6 L20,6 C20.5522847,6 21,6.44771525 21,7 C21,7.55228475 20.5522847,8 20,8 L18,8 L18,16 L20,16 C20.5522847,16 21,16.4477153 21,17 C21,17.5522847 20.5522847,18 20,18 L18,18 L18,20 C18,20.5522847 17.5522847,21 17,21 C16.4477153,21 16,20.5522847 16,20 L16,18 L8,18 L8,20 C8,20.5522847 7.55228475,21 7,21 C6.44771525,21 6,20.5522847 6,20 L6,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 L6,16 Z M8,16 L16,16 L16,8 L8,8 L8,16 Z"}>*/}
        {/*</path>*/}


    </symbol>


);

const LinkNode = (
    <symbol
        viewBox="0 0 154 54"
        width="154"
        height="54"
        id="linkNode"
        onClick={() => console.log("tim")}>

        <rect x="0"
              y="0"
              rx="2"
              ry="2"
              width="154"
              height="54"/>

    </symbol>
);

const SpecialChildShape = (<symbol viewBox="0 0 154 154" id="specialChild">
    <rect
        x="2.5"
        y="0"
        width="154"
        height="154"
        fill="rgba(30, 144, 255, 0.12)"
    />
</symbol>);

const EmptyEdgeShape = (<symbol viewBox="0 0 50 50" id="emptyEdge">
    <circle cx="25" cy="25" r="8" fill="currentColor"/>
</symbol>);

const SpecialEdgeShape = (
    <symbol viewBox="0 0 50 50" id="specialEdge">
        <rect
            transform="rotate(45)"
            x="27.5"
            y="-7.5"
            width="15"
            height="15"
            fill="currentColor"
        />
    </symbol>
);

export default {
    EdgeTypes: {
        emptyEdge: {
            shape: EmptyEdgeShape, shapeId: "#emptyEdge", typeText: "Empty"
        },
        specialEdge: {
            shape: SpecialEdgeShape, shapeId: "#specialEdge"
        }
    }, NodeSubtypes: {
        specialChild: {
            shape: SpecialChildShape, shapeId: "#specialChild"
        }
    }, NodeTypes: {
        empty: {
            shape: EmptyNodeShape, shapeId: "#empty",
        }, generalNode: {
            shape: GeneralNode, shapeId: "#generalNode",
        }, classNode: {
            shape: ClassNode, shapeId: "#classNode",
        }, linkNode: {
            shape: LinkNode, shapeId: "#linkNode",
            typeText: "ScLink"
        }
    }
};
