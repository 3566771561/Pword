/*
    * 条件判断总结:
		1.if条件语句
			（1）if(条件){}
			 (2)if(条件1){}
			else if(条件2){}
			 (3)if(条件1){}
			 else if(条件2){}
             else if（条件3){}
             */
    window.onload = function(){
		var Btn1 = document.getElementById('btn1');
		var Btn2 = document.getElementById('btn2');
        var oP = document.getElementById('p1');
		var num = 15;
		Btn1.onclick = function(){
            	if(num<32){
						num++;
					oP.style.fontSize = num+'px';
					// alert(num);
					}
				};
				Btn2.onclick = function()
				{
					if(num>11)
					{
						num--;
					oP.style.fontSize = num+'px';
					// alert(num);
					}
					
					
				};
			};
		
        
