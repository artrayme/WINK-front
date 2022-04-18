function fromTripleToJson(triple) {
    const source = getSource(triple);
    const edge = getEdge(triple);
    const target = getTarget(triple);
    const tripleJson = {
        "src": getDataFromElement(source),
        "edge": getDataFromElement(edge),
        "target": getDataFromElement(target)
    };
    return tripleJson;
}

function getTypeValue(type) {
    if (type == "sc_node") {
        return 1;
    } else if (type == "sc_link") {
        return 2;
    } else if (type == "sc_edge_dcommon") {
        return 8;
    } else if (type == "sc_edge_ucommon") {
        return 4;
    } else if (type == "sc_edge_main") { // HELP

    } else if (type == "sc_edge_access") {
        return 16;
    }
}

function getDataFromElement(element) {
    return {
        type: element.substring(0, element.indexOf("#")).replace(/\s/g, ''),
        id: element.substring(element.indexOf("#") + 1, element.length).replace(/\s/g, ''),
        value: getTypeValue(element.substring(0, element.indexOf("#")).replace(/\s/g, ''))
    };
}

function getSource(triple) {
    return triple.substring(0, triple.indexOf("|"));
}

function getEdge(triple) {
    return triple.substring(
        triple.indexOf("|") + 1,
        triple.lastIndexOf("|")
    );
}

function getTarget(triple) {
    return triple.substring(
        triple.lastIndexOf('|') + 1,
        triple.indexOf(";"));
}

function readFile(sourceFileName) {
    const fs = require("fs");
    const buffer = fs.readFileSync(sourceFileName);
    const fileContent = buffer.toString();
    return fileContent;
}

function getJsonFromTextWithPattern(sourceFileName, regex) {
    var result = [];
    var fileData = readFile(sourceFileName).match(regex);
    if (fileData) {
        let temp = []
        fileData.forEach(item => {
            temp.push(item.replaceAll('\n', ''))
        })
        fileData = temp;
        temp = [];
        fileData.forEach(item => {
            temp.push(item.replaceAll('\t', ''));
        })
        fileData = temp;
        fileData.forEach(item => {
            result.push(fromTripleToJson(item));
        })
    }
    return result;
}

function scsToJson(sourceFileName) {
    const levelOneBaseRegex = /(.+\#\w+)(\s*\t*\n*\r*)\|(\s*\t*\n*\r*)(.+\#(.+))(\s*\t*\n*\r*)\|(\s*\t*\n*\r*)(.+\#.+)(\s*\t*\n*\r*);(\s*\t*\n*\r*);/g;
    const levelTwoBaseRegex = '//g';
    const result = Object.assign({},
        getJsonFromTextWithPattern(sourceFileName, levelOneBaseRegex),
        getJsonFromTextWithPattern(sourceFileName, levelTwoBaseRegex));
    return result;
}

const sourceFileName = "scs_text.txt";
const result = scsToJson(sourceFileName);
console.log("result: ", result);


