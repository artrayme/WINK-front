/* eslint-disable no-useless-escape */

let edgeTypes = {
    "sc_edge_dcommon": 4,
    "sc_edge_ucommon": 8,
    "sc_edge_main": 16,
    "sc_edge_access": 16,
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

export function convertToJson(scsText: string): [{}] {
    let codeLines = scsText.split(';;')
    codeLines = codeLines.filter(line => {
        return line.length > 0;
    })
    let elementsMap: [string] = [""]
    let result: [{}] = [{}]
    for (let i = 0; i < codeLines.length; i++) {
        let triplet = codeLines[i].split('\|')
        for (let j = 0; j < triplet.length; j++) {
            let components = triplet[j].trim().split('\#')
            let type = components[0];
            let name = components[1];
            if (nodeTypes[type] !== undefined && elementsMap[name] === undefined) {
                result.push(createNode(type, name, elementsMap))
            }
        }
        result.push(createEdge(
                triplet[0].trim().split('\#')[1],
                triplet[2].trim().split('\#')[1],
                triplet[1].trim().split('\#')[0],
                triplet[1].trim().split('\#')[1],
                elementsMap
            )
        )
    }
    return result;
}

function createNode(nodeType: string, nodeName: string, map: [string]) {
    if (nodeName !== '...') map.push(nodeName)
    else map.push("")
    return {
        el: "node",
        type: nodeTypes[nodeType],
        id: nodeName
    }
}

function createEdge(source: string, target: string, edgeType: string, edgeName: string, map: [string]) {
    if (edgeName !== "...") map.push(edgeName);
    else map.push("")
    return {
        el: "edge",
        src: {
            type: "ref",
            value: map.indexOf(source)
        },
        trg: {
            type: "ref",
            value: map.indexOf(target)
        },
        type: edgeTypes[edgeType],
        id: edgeName
    }
}

