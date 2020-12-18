/*
    表单改变事件
    input:当表单内容发生变化的时候触发
    change: 当表单内容发生变化的时候并失去焦点的时候触发
*/
var oIpt1 = document.getElementById('ipt1');
var oIpt2 = document.getElementById('ipt2');

oIpt1.oninput = function(){
    console.log("当光标触发表单之后输入字符时,会发生变化")
}
oIpt2.onchange = function(){
    console.log("当光标触发表单和输入字符时都不会发生变化，当光标离开表单跳转到页面时，表单发生变化的时候失去焦点")
}



var oIpt3 = document.getElementById('ipt3');
oIpt3.oninput = function(){
    console.log("当光标触发表单之后输入字符时,会发生变化")//进入input
}
oIpt3.onchange = function(){
    console.log("当光标触发表单和输入字符时都不会发生变化，当光标离开表单跳转到页面时，表单发生变化的时候失去焦点")//离开input跳转到下一个对话框，或游览器页面上。
}