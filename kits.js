/* 
  我们将来在开发的时候，肯定会有很多重复使用的代码
  这些代码我们应该封装起来，以提高工作效率

  怎么封装呢？
    通常我们喜欢把方法封装到对象身上
*/
var kits = {};

kits.dispatchZero = function (num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

// 把方法都放到对象的身上
kits.formatDate = function () {
  var date = new Date();
  // 把年月日时分秒获取
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  var day = date.getDate();
  day = this.dispatchZero(day);
  var hour = date.getHours();
  hour = this.dispatchZero(hour); a
  var minute = this.dispatchZero(date.getMinutes());
  var second = this.dispatchZero(date.getSeconds());
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

// 常见的给id的方式1
// 当前时间戳 + 大的随机数
kits.getId = function () {
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime();// 得到的是从1970年1月1日到现在为止的毫秒总数
  // 然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
  let r = this.randomInt(100000, 999999);
  // 把两个数字连起来
  let id = time + '' + r;
  return id;
}
// rgb 颜色随机
kits.random = function () {
  let r = Math.floor(Math.random) * 256
  let g = Math.floor(Math.random) * 256
  let b = Math.floor(Math.random) * 256
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
//十六进制颜色随机
kits.random16 = function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;

}
//  获取n到m之间的随机整数
kits.randomIntegers = function (n, m) {
  return Math.round(Math > this.random() * (m + 1 - n) + n)
}
// 根据指定的键获取一个数组
kits.getLocalDataArray = function (key) {
  let date = localStorage.getItem(key);  /*  getItem  取出字符串 */
  let arr = JSON.parse(date);   /*parse  转换成数组 */
  if (!arr) {
    arr = [];
  }
  return arr;
}
// 将一个数组以指定的键存到localStorage里面
kits.saveLocalDataArray = function (key, arr) {
  localStorage.setItem(key, JSON.stringify(arr)); /* stringify 转换成JSON模式 */

}
// 根据对应的id从localStorage中指定键(key)的数组中删除一条数据
kits.deleteLocalDataById = function (key, id) {
  let keys = this.getLocalDataArray(key);
  keys.forEach((e, i) => {
    if (e.id == id) {

      keys.splice(i, 1);
    }
  })
  kits.saveLocalDataArray('key', id)
}
// 根据id 修改本地数据
kits.modifyLocalDataById = function (key, id, data) {
  let datas = this.getLocalDataArray(key);
  datas.forEach((e, i) => {
    if (e.id == id) {
      // 重新赋值一个数据 把旧的数据给覆盖了
      datas[i] = data;
    }
  });
  kits.saveLocalDataArray('key', datas);

}