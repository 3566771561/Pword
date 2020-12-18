var oIpt = document.getElementById('ipt');
var oCon = document.getElementById('con');
oIpt.oninput = function(){
    oCon.textContent = this.value;//this.value是给对象添加属性赋值
}