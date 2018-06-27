// 设置 cookie 值的函数
function setCookie(cname, cvalue, exdays = 0.1) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// 获取 cookie 值的函数
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
// 删除 cookie
function removeCookie(name) {
    setCookie(name, "", -1);
}

// 检测 cookie 值的函数
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    }
    else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}
// 获取url参数
function GetRequest() {
    var url = location.hash; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(9);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

// 校验规则  居于elementUI的表单校验
/**
 * 校验Email
 */
var checkEmail = (rule, value, callback) => {
    let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    if (value == '') {
        return callback(new Error('请输入邮箱'))
    } else if (!reg.test(value)) {
        callback(new Error('邮箱格式错误'));
    } else {
        callback()
    }
};
/**
 * 表单不能为空
 */
var checkEmpty = (rule, value, callback) => {
    if (value == '') {
        return callback(new Error('不能为空'));
        // callback();

    }
    callback();
};
/**
 * 校验电话号码
 */
var checkTel = (rule, value, callback) => {

    if (value == '') {
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
var checkSelect = (rule, value, callback) => {

    if (!value) {
        return callback(new Error('您好没选择'));
    }
    callback();
};
/**
 * 身份证号码校验
 */
var checkIdCardNum = (rule, value, callback) => {
    var reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
    if (value == '') {
        return callback(new Error('请输入身份证号码'))
    } else if (!reg.test(value)) {
        callback(new Error('身份证号码格式错误'));
    } else {
        callback()
    }
}
export {
    setCookie,
    getCookie,
    checkCookie,
    removeCookie,
    checkEmail,
    checkEmpty,
    checkTel,
    checkSelect,
    checkIdCardNum,
    GetRequest
};
