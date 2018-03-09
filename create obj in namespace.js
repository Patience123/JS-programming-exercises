// 根据包名，在指定空间中创建对象
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')   ===>>>   {a: {test: 1, b: {c: {d: {}}}}}

function namespace(oNamespace, sPackage) {
    var sPackageArr = sPackage.split('.');
    var result = oNamespace;   // 保留对原始对象的引用
 
    for(var i = 0, len = sPackageArr.length; i < len; i++) {
        if(sPackageArr[i] in oNamespace) {  // 空间名在对象中
            if(typeof oNamespace[sPackageArr[i]] !== "object") {    // 为原始值 
                oNamespace[sPackageArr[i]] = {};    // 将此属性设为空对象            
            }   
        } else {    // 空间名不在对象中，建立此空间名属性，赋值为空
            oNamespace[sPackageArr[i]] = {};
        }
        oNamespace = oNamespace[sPackageArr[i]];    // 将指针指向下一个空间名属性。
    }
 
    return result;
}