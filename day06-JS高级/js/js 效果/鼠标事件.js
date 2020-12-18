/*
    鼠标事件：
        onmousedown:鼠标按下
        onmouseup:鼠标抬起
        onmousemove:鼠标移动
*/
var oMou = document.getElementById('mouse');
oMou.onmousedown = function(){
    console.log("鼠标按下")
    oMou.style.backgroundColor = "red";
}
oMou.onmouseup = function(){
    console.log("鼠标抬起")
    oMou.style.backgroundColor = "green";
}
var lastTime = 0;//暂时给出初始时间为0
oMou.onmousemove = function(){
    oMou.style.backgroundColor = "blue";
    var nowTime = Date.now();//移动鼠标，获取当前的时间
    var AfrTime = nowTime - lastTime;//用当前的时间减去上次时间，得到行的时间
    lastTime = nowTime;//把计算的时间差值赋给上次时间,移动鼠标获取的时间(秒)
    console.log(AfrTime,"鼠标移动了")//
}