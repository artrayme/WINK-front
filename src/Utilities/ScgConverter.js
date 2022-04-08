let dictionary;

export function convertOldGwfToNew(content){
    dictionary = getDictionary();
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(content, "text/xml");
    getChildren(xmlDoc)
    return (new XMLSerializer()).serializeToString(xmlDoc)
}

function getChildren(elem){

    for(const i in elem.childNodes){

        if(elem.childNodes[i].nodeType === 1){

            if (elem.childNodes[i].hasAttribute("type")) {

                if (elem.childNodes[i].tagName === "node" || elem.childNodes[i].tagName === "pair"){
                    if (dictionary.has(elem.childNodes[i].getAttribute("type"))) {
                        elem.childNodes[i].setAttribute("type", dictionary.get(elem.childNodes[i].getAttribute("type")));
                    }
                } else if (elem.childNodes[i].tagName === "arc") {
                    if (dictionary.has(elem.childNodes[i].getAttribute("type"))) {
                        // elem.childNodes[i].tagName = "pair";
                        elem.childNodes[i].setAttribute("type", dictionary.get(elem.childNodes[i].getAttribute("type")));

                    }
                } else if (elem.childNodes[i].tagName === "contour") {
                    if (elem.childNodes[i].getAttribute("type") === "") {
                        elem.childNodes[i].setAttribute("type", "contour/const/perm");
                    }
                } else if (elem.childNodes[i].tagName === "bus") {
                    if (elem.childNodes[i].getAttribute("type") === "") {
                        elem.childNodes[i].setAttribute("type", "bus");
                    }
                }

            }

            getChildren(elem.childNodes[i]);
        }
    }
}

function getDictionary() {
    const replacementPairs = new Map();
    replacementPairs.set("node/-/not_define", "node/-/-/not_define")
        .set("node/var/symmetry", "node/var/perm/tuple")
        .set("node/const/general_node", "node/const/perm/general")
        .set("node/const/relation", "node/const/perm/relation")
        .set("node/const/attribute", "node/const/perm/role")
        .set("node/const/nopredmet", "node/const/perm/struct")
        .set("node/const/material", "node/const/perm/terminal")
        .set("node/const/asymmetry", "node/const/perm/tuple")
        .set("node/var/general_node", "node/var/perm/general")
        .set("node/var/relation", "node/var/perm/relation")
        .set("node/var/attribute", "node/var/perm/role")
        .set("node/var/nopredmet", "node/var/perm/struct")
        .set("node/var/material", "node/var/perm/terminal")
        .set("node/const/predmet", "node/const/temp/struct")
        .set("node/const/group", "node/const/perm/group")
        .set("node/var/predmet", "node/var/temp/struct")
        .set("node/var/group", "node/var/perm/group")

        .set("pair/const/synonym","pair/const/-/perm/noorien")
        .set("pair/const/orient","pair/const/-/perm/orient")
        .set("arc/const/fuz","pair/const/fuz/perm/orient/membership")
        .set("arc/const/fuz/temp","pair/const/fuz/temp/orient/membership")
        .set("arc/const/neg","pair/const/neg/perm/orient/membership")
        .set("arc/const/neg/temp","pair/const/neg/temp/orient/membership")
        .set("arc/const/pos","pair/const/pos/perm/orient/membership")
        .set("arc/const/pos/temp","pair/const/pos/temp/orient/membership")
        .set("pair/var/noorient","pair/-/-/-/noorient")
        .set("pair/var/orient","pair/-/-/-/orient")
        .set("arc/var/fuz","pair/var/fuz/perm/orient/membership")
        .set("arc/var/fuz/temp","pair/var/fuz/temp/orient/membership")
        .set("arc/var/neg","pair/var/neg/perm/orient/membership")
        .set("arc/var/neg/temp","pair/var/neg/temp/orient/membership")
        .set("arc/var/pos","pair/var/-/perm/noorien")
        .set("arc/var/pos/temp","pair/var/pos/temp/orient/membership")
        .set("pair/noorient","pair/-/-/-/noorient")
        .set("pair/orient","pair/-/-/-/orient")
        .set("arc/-/-","node/var/perm/general"); //тут не нашла дуги, поэтому получилась дефолтная одиночная

    return replacementPairs;
}