// 查找两个节点的最近的一个共同父节点，可以包括节点自身

// method1
function commonParentNode(oNode1, oNode2) {
    if(isChildNode(oNode1, oNode2)) {
        return oNode2;
    }
    if(isChildNode(oNode2, oNode1)) {
        return oNode1;
    }
    var sameParent = oNode1.parentNode;
    while(sameParent != document) {
        if(isChildNode(oNode2, sameParent)) {
            return sameParent;
        }
        sameParent = sameParent.parentNode;
    }
    return document;
}

function isChildNode(cNode, pNode) { //判断第一个参数是否是第二个参数的子节点
    var children = pNode.childNodes; //获取所有字节点的集合
    var i;
    for(i = 0; i < children.length; i++) {
        if(children[i].childNodes.length > 0) { //如果该子节点还有子节点则递归查找
            return isChildNode(cNode, children[i]);  
        }
        if(cNode == children[i]) {
            return true;
        }
    }
    return false;
}

// // method2
// function commonParentNode(oNode1, oNode2) {
//     for(; oNode1; oNode1=oNode1.parentNode) {
//         if(oNode1.contains(oNode2)) {
//             return oNode1;
//         }
//     }
// }