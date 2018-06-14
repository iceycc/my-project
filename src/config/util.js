// 设置 cookie 值的函数
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
// 获取 cookie 值的函数
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
// 检测 cookie 值的函数
function checkCookie()
{
  var username=getCookie("username");
  if (username!="")
  {
    alert("Welcome again " + username);
  }
  else
  {
    username = prompt("Please enter your name:","");
    if (username!="" && username!=null)
    {
      setCookie("username",username,365);
    }
  }
}
// 校验规则
/**
 * 校验Email
 */
var checkEmail = (rule, value, callback) => {
  if (value == '') {
    return callback(new Error('不能为空'));
    // callback();

  }
  callback();
};
/**
 * 表单不能为空
 */
var checkEmpty= (rule, value, callback) => {
  if (value == '') {
    return callback(new Error('不能为空'));
    // callback();

  }
  callback();
};
/**
 * 校验电话号码
 */
var checkTel= (rule, value, callback) => {

  if(value == ''){
    return callback(new Error('手机号码不能为空'));
  }
  if (value.length !== 11) {
    return callback(new Error('手机号格式不正确'));
    // callback();
  }
  callback();
};
/**
 * 校验下拉表单不能不选择
 */
var checkSelect =(rule, value, callback) => {

  if(!value ){
    return callback(new Error('您好没选择'));
  }
  callback();
};
export {
  setCookie,
  getCookie,
  checkCookie,
  checkEmail,
  checkEmpty,
  checkTel,
  checkSelect
};
