//第一种方法:
// var oIpt = document.getElementById('box');
// var num = 0;
// oIpt.onclick = function(){
//         if(num){
//             oIpt.style.backgroundColor = "red";
//             // console.log(num);
//             num -= 1;
//         }else{
//             oIpt.style.backgroundColor = "pink";
//             // console.log(num);
//             num += 1;
//         }
//     }


 //第二种方法:
 /*
    点击循环变色
        1.获取元素
        2.绑定点击事件
        3.设置一个计数器
        4.每次点击 让计数器累加
        5.根据计时器的值，改变对应的颜色
        知识点：
        给元素设置css样式：
        元素.style.样式的属性名 = '样式的属性名'(其实是设置的是行内样式)
 */
// var oBox = document.getElementById('box');
// var num = 0;//默认偶数是pink
// oBox.onclick = function(){
//     //每次触发 需要计数器累加
//     num++;
//     if(num % 2 === 0){
//         oBox.style.backgroundColor = "pink";
//         console.log(num)//偶数
//     }else{
//         oBox.style.backgroundColor = "yellow";
//         console.log(num)//奇数
//     }
// }

//第三种方法:
/*
    点击循环变色(开关思想)
        1.获取元素
        2.绑定点击事件
        3.设置一个开关
        4.根据开关状态，改变元素样式
*/
// var oBox = document.getElementById('box');
// var flag = true;//true默认的颜色为pink
// oBox.onclick = function(){
//     flag = !flag;
//     if(flag){
//         oBox.style.backgroundColor = "pink";
//         console.log(flag)
//     }else{
//         console.log(flag)
//         oBox.style.backgroundColor = "blue";
//     }
// }

//第三种方法：this的调用
var oBox = document.getElementById('box');
var flag = true;//true默认的颜色为pink
oBox.onclick = function(){
    flag = !flag;
    if(flag){
        this.style.backgroundColor = "pink";
        console.log(this)
    }else{
        console.log(this)
        this.style.backgroundColor = "blue";
    }
}