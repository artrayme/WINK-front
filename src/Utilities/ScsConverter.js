// var root = xmlDoc; //взятие первого узла из документа (для примера текущий документ)
// getChildren(root);      //проходим по всему DOM дереву
let pairDictionary;
let tempElement;
let flag;
let resultStat = null;
let xmlDoc;

export function convertGwfToScs(content) {
    resultStat = ""
    pairDictionary = getPairDictionary()
    let parser = new DOMParser();
    xmlDoc = parser.parseFromString(content, "text/xml");
    let childNode = xmlDoc.childNodes[0];
    getChildren(childNode)
    return resultStat
}

function getChildren(elem) {
    for (const i in elem.childNodes) {
        if (elem.childNodes[i].nodeType === 1) {

            if (elem.childNodes[i].hasAttribute("type")) {
                //если дуга, то проверяем идет она в дугу или в узел
                if (elem.childNodes[i].tagName === "arc" || elem.childNodes[i].tagName === "pair") {
                    checkChildren(elem.childNodes[i], "", true);
                    getRes();
                }

            }

            getChildren(elem.childNodes[i]);
        }
    }
}

function getRes() {
    console.log(resultStat);
}

function checkChildren(elem, end, flagIsEnd) {

    isGotoNode(xmlDoc, elem.getAttribute("id_b")); //проверяем первый элемент узел или дуга

    if (flag) { //узел
        findNodeById(xmlDoc, elem.getAttribute("id_b"));
        if (resultStat == null) {
            if (tempElement.tagName === "content") {
                if (tempElement.getAttribute("file_name") !== "") {
                    resultStat = "\"file://" + tempElement.getAttribute("file_name") + "\"";
                } else {
                    resultStat = "_"
                }
            } else {
                if (tempElement.getAttribute("idtf") !== "") {
                    resultStat = tempElement.getAttribute("idtf");
                } else {
                    resultStat = "_"
                }
            }

        } else {
            if (tempElement.tagName === "content") {
                if (tempElement.getAttribute("file_name") !== "") {
                    resultStat += "\"file://" + tempElement.getAttribute("file_name") + "\"";
                } else {
                    resultStat += "_"
                }
            } else {
                if (tempElement.getAttribute("idtf") !== "") {
                    resultStat += tempElement.getAttribute("idtf");
                } else {
                    resultStat += "_"
                }
            }
        }
    } else { //дуга
        findNodeById(xmlDoc, elem.getAttribute("id_b"));

        if (resultStat == null) {
            resultStat = '(';
        } else {
            resultStat += '(';
        }

        end += ")";
        checkChildren(tempElement, end, false);
    }

    findNodeById(xmlDoc, elem.getAttribute("id_e"));

    isGotoNode(xmlDoc, elem.getAttribute("id_e")); //проверяем второй элемент узел или дуга
    if (flag) {
        resultStat += " " + pairDictionary.get(elem.getAttribute("type")) + " ";

        if (tempElement.tagName === "content") {
            if (tempElement.getAttribute("file_name") !== "") {
                resultStat += "\"file://" + tempElement.getAttribute("file_name") + "\"" + end;
            } else {
                resultStat += "_" + end;
            }
        } else {
            if (tempElement.getAttribute("idtf") !== "") {
                resultStat += tempElement.getAttribute("idtf") + end;
            } else {
                resultStat += "_" + end;
            }
        }

        if (flagIsEnd) {
            resultStat += ";;\n";
        }
    } else {
        //в дугу
        resultStat += " " + pairDictionary.get(elem.getAttribute("type")) + " ";
        resultStat += '(';

        end += ")";
        checkChildren(tempElement, end, true);
    }

}

//проверка на то, что дуга идет в узел. Если в узел - то запись обычной тройкой a->b, иначе a->(b->c)
function isGotoNode(elem, id) {

    for (var i in elem.childNodes) {

        if (elem.childNodes[i].nodeType === 1) {

            if (elem.childNodes[i].getAttribute("id") === id) {
                //проверяем чтобы это была дуга
                flag = elem.childNodes[i].tagName !== "pair";
            }

            isGotoNode(elem.childNodes[i], id);

        }
    }

}

function findNodeById(elem, id) {

    for (var i in elem.childNodes) {

        if (elem.childNodes[i].nodeType === 1) {

            if (elem.childNodes[i].getAttribute("id") === id) {
                //нашли по id, теперь будем чекать это узел, шина, контур или картинка
                if (elem.childNodes[i].tagName === "node") { //здесь либо картинка, либо узел
                    try {
                        if (elem.childNodes[i].childNodes[1].tagName === "content" &&
                            elem.childNodes[i].childNodes[1].getAttribute("file_name") !== "") { //картинка
                            tempElement = elem.childNodes[i].childNodes[1];
                        } else {
                            tempElement = elem.childNodes[i];
                        }
                    } catch (e) { //если ошибка вылезла, то это какой-то странный неправильный узел
                        tempElement = elem.childNodes[i];
                        return;
                    }

                } else if (elem.childNodes[i].tagName === "bus") {
                    //ищем по атрибуту "owner", который является id узла (node)
                    findNodeById(xmlDoc, elem.childNodes[i].getAttribute("owner"));
                } else if (elem.childNodes[i].tagName === "contour") {
                    //ПОКА ХЗ ЧТО ДЕЛАТЬ С КОНТУРАМИ
                } else if (elem.childNodes[i].tagName === "pair") {
                    tempElement = elem.childNodes[i];
                    return;
                }
            }

            findNodeById(elem.childNodes[i], id);

        }
    }

}

function getPairDictionary() {
    const replacementPairs = new Map();
    replacementPairs.set("pair/const/-/perm/noorien", "<=>")
        .set("pair/const/-/perm/orient", "=>")
        .set("pair/const/fuz/perm/orient/membership", "-/>")
        .set("pair/const/fuz/temp/orient/membership", "~/>")
        .set("pair/var/pos/perm/orient/membership", "_->")
        .set("pair/var/neg/temp/orient/membership", "_~|>")
        .set("pair/var/neg/perm/orient/membership", "_-|>")
        .set("pair/const/pos/perm/orient/membership", "->")
        .set("pair/const/pos/temp/orient/membership", "~>")
        .set("pair/var/fuz/temp/orient/membership", "_~/>")
        .set("pair/var/fuz/perm/orient/membership", "_-/>")
        .set("pair/const/neg/perm/orient/membership", "-|>") //а еще 7я это ..>
        .set("pair/const/neg/temp/orient/membership", "~|>")
        .set("pair/var/pos/temp/orient/membership", "_~>")
        .set("pair/-/-/-/noorient", "<>")
        .set("pair/-/-/-/orient", ">")//тут все дуги, кроме двух _<=> и _=> тк их не существует

        //тут установим дуги, которые по сути не переводятся, но они зачем-то существуют
        .set("pair/meta/pos/temp/orient/membership", "->")
        .set("pair/meta/pos/perm/orient/membership", "->")
        .set("pair/meta/neg/temp/orient/membership", "->")
        .set("pair/meta/neg/perm/orient/membership", "->")
        .set("pair/meta/fuz/temp/orient/membership", "->")
        .set("pair/meta/fuz/perm/orient/membership", "->")
        .set("pair/meta/-/temp/orient", "->")
        .set("pair/meta/-/temp/noorien", "->")
        .set("pair/meta/-/perm/orient", "->")
        .set("pair/meta/-/perm/noorien", "->")
        .set("pair/var/-/temp/orient", "->")
        .set("pair/var/-/temp/noorien", "->")
        .set("pair/var/-/perm/orient", "->")
        .set("pair/var/-/perm/noorien", "->")
        .set("pair/const/-/temp/orient", "->")
        .set("pair/const/-/temp/noorien", "->");

    return replacementPairs;
}
