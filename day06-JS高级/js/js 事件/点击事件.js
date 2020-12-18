/*
    点击事件:
        左键单击:onclick(在元素上，按下抬起，完成事件。)
        左键双击:ondblclick(触发连续两次单击，两次单击间隔低于300ms，则为双击。)
        右键单击:oncontextmenu
*/
//左键单击
var oBox = document.getElementById('pox');
oBox.onclick = function(){
    console.log("左键单击")
}
//左键双击
oBox.ondblclick = function(){
    console.log("左键双击")

}
//右键单击
oBox.oncontextmenu = function(){
    console.log("右键单击")
    return false;
}