/*
    1.当事件发生的时候，计算文本域中所输入字数的长度，提出出判断
    2.计算剩余输入字数，并赋值给span元素
    3.字数低于0会变红。

    知识点：
    给一个元素内容重新赋值，使用textContent属性。
    textContent定义和用法：返回或设置选定元素的文本。获得列表的所有文本内容。
    


*/

var oText = document.getElementById('text');
var oNum = document.getElementById('num');
oText.onkeyup = function(){
    //获取表单的内容使用value属性
    var textLength = oText.value.length;
    //计算剩余的字数
    var newNum = 40 - textLength;
    //把字数传给span元素
    oNum.textContent = newNum;
    //判断新的字数是否超出选定元素的文本区域内总的字数
    if(newNum > 0){
        oNum.style.color = "red";//超出文本域的总字数，span元素会告诉用户输入的字数超出文本域。
    }else{
        oNum.style.color = "black";//未超出文本域的范围，但一直在判断是否超出，并把字数给span元素。
        oText.value = oText.value.substr(0,40);//如果剩余字数小于0，则不允许输入内容，谢谢。
    }
    
}