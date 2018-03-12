const defaultDesignWidth = 375;

// 你真好
function px2rem(px, designWidth) {
    //预判你将会在JS中用到尺寸，特提供一个方法助你在JS中将px转为rem。就是这么贴心。
    if (!designWidth) {
        //如果你在JS中大量用到此方法，建议直接定义 hotcss.designWidth 来定义设计图尺寸;
        //否则可以在第二个参数告诉我你的设计图是多大。
        designWidth = defaultDesignWidth;
    }

    return parseInt(px, 10) * 320 / designWidth / 20;
}
// 深拷贝
function deepCopy(source) {
    var result = {};
    for (var key in source) {
        result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
    }
    return result;
}

/*
     * @description    根据某个字段实现对json数组的排序
     * @param   array  要排序的json数组对象
     * @param   field  排序字段（此参数必须为字符串）
     * @param   reverse 是否倒序（默认为false）
     * @return  array  返回排序后的json数组
    */
function jsonSort(array, field, reverse) {
  //数组长度小于2 或 没有指定排序字段 或 不是json格式数据
  if(array.length < 2 || !field ||typeof array[0] !=="object") return array;
  //数字类型排序
  if(typeof array[0][field] === "number") {
    array.sort(function(x, y) {return x[field] - y[field]});
  }
  //字符串类型排序
  if(typeof array[0][field] === "string") {
    array.sort(function(x, y) {return x[field].localeCompare(y[field])});
  }
  //倒序
  if(reverse) {
    array.reverse();
  }
  return array;
}

function getArrIndex(arr, obj) {
  let index = null;
  let key = Object.keys(obj)[0];
  arr.every(function(value, i) {
    if (value[key] === obj[key]) {
      index = i;
      return false;
    }
    return true;
  });
  return index;
}

export {px2rem, deepCopy,jsonSort,getArrIndex};
