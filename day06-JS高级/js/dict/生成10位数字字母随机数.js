/*<!--下面是外联javaScript-->
<script type="text/javascript" src="js地址">
*/
/* 
            生成10位数字字母随机数
                1.生成一个[0-35]的随机数 
                2.转换成36进制
                3.把10次的结果拼接字符串
        */
var str = "";
for (var i = 0; i < 10; i++){
    var num = Math.floor(Math.random() * 36);
    var oNum = num.toString(36);
    str += oNum;
}
console.log(str);
