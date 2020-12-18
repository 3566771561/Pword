/*
    键盘事件
        可输入的元素可以绑定键盘事件
        想要给某个元素绑定键盘事件，可以直接绑定给document，然后事件触发之后，在控制某个元素

    键盘事件
    keyup: 按键抬起
    keydown:按键按下
*/
var Board = document.getElementById('board');
var oSize = document.getElementById('size');
Board.onkeyup = function(){
    console.log("按下")
}
Board.onkeydown = function(){
    console.log("抬起")
}
var num = 0;
document.onkeydown = function(){
    num++;
    console.log("键盘任意按键按下可控制其他元素")
    oSize.style.marginLeft = num + 'px';
}