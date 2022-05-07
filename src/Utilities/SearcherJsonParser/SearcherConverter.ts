import {ScType} from "./ScType";
import {ScIdtf} from "./ScIdtf";
import {ScAlias} from "./ScAlias";

let edgeTypes = {
    "=>": 4,
    "<=>": 8,
    "->": 16,
    "-/>": 2608,
    "-|>": 2353,
    "~/>": 1584,
    "~>": 1200
}

let nodeTypes = {
    "sc_node": 1,
    "sc_node_class": 2081,
    "sc_node_abstract": 4129,
    "sc_node_struct": 257,
    "sc_node_tuple": 129,
    "sc_node_role_relation": 513,
    "sc_node_norole_relation": 1025
}

// TODO: unused
// class JsonSearchingTriplet {

//     first: any;
//     second: any;
//     third: any;

//     constructor(first: any, second: any, third: any) {
//         this.first = first;
//         this.second = second;
//         this.third = third;
//     }
// }

let counter = 0

function createScNode(element: string) {
    if (element.startsWith("$")) return new ScAlias(element.substring(1, element.length))
    let temp = element.split(":")
    if (temp.length === 1) temp.push("_" + counter++)
    if (temp[0] === '_') return new ScType(0, temp[1])
    if (temp[0] in nodeTypes) {
        return new ScType(nodeTypes[temp[0]], temp[1]);
    } else {
        return new ScIdtf(element)
    }
}

function createScEdge(element: string) {
    if (element.startsWith("$")) return new ScAlias(element.substring(1, element.length))
    let temp = element.split(":")
    if (temp.length === 1) temp.push("_" + counter++)
    if (temp[0] === '_') return new ScType(0, temp[1])
    if (temp[0] in edgeTypes) {
        return new ScType(edgeTypes[temp[0]], temp[1]);
    }
}

export function convertToJson(code: string) {
    let payload: any[][] = []
    let lines = code.split("\n");
    lines.forEach((line) => {
        let elements = line.split(" ");
        let first = createScNode(elements[0]);
        let second = createScEdge(elements[1]);
        let third = createScNode(elements[2]);
        let triplet = [first, second, third]
        payload.push(triplet)
    })

    return JSON.stringify({payload: payload})
}