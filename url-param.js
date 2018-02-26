// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组

function getUrlParam(sUrl, sKey) {
    var searchArr = sUrl.split("?")[1].split("#")[0].split("&");//获取到一个所有查询参数的数组
    var result = {};
    
    var i;
    for(i = 0; i < searchArr.length; i++) {
        var key = searchArr[i].split("=")[0];
        var value = searchArr[i].split("=")[1];
        //每一个参数名就是结果对象的一个属性，并且都为数组
        if(key) {
            if(!result[key]) {//result.key这个属性不存在
                result[key] = [];
            }
            result[key].push(value);//给这个属性（该属性是一个数组）添加值
        }
    }
    // console.log(result);
    
    if(sKey) {//指定参数名的情况
        if(!result[sKey]) {
            return '';
        } else if(result[sKey].length == 1) {
            result = result[sKey][0];
            return result;
        } else {
            result = result[sKey];
            return result;
        }
    } else {//不指定参数名的情况
        return result;
    }
    // console.log(result);
}

// getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', key);