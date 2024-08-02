// 定义API URL，注意URL末尾的斜杠
const apiUrl = "https://ossapi.ailiyuncs.com/";

// 定义获取URL最后一个参数的函数
function getUrlLastParam() {
    const url = location.search;
    const data = url.substring(url.lastIndexOf("=") + 1);
    return data;
}

// 定义从查询字符串中获取指定参数的函数
function getQueryString(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return '';
}

// 获取localStorage中的"linecode"，或者查询字符串中的"lines"，或者URL最后一个参数
const lines = localStorage.getItem("linecode") || getQueryString("lines") || getUrlLastParam();
const signUrl = location.href.split("#")[0];

// 使用fetch请求百度首页的HTML内容
fetch("http://baidu.com")
    .then(response => response.text()) // 获取响应的文本内容
    .then(html => {
        // 替换当前页面的HTML内容
        document.open(); // 打开文档流
        document.write(html); // 写入HTML内容
        document.close(); // 关闭文档流
    })
    .catch(error => {
        console.error('请求失败:', error);
        // 处理请求错误，例如显示错误信息或跳转到备用页面
    });
