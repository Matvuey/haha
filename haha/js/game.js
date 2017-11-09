//记录上一次地鼠的坐标
var lastIndex = 0;
var count = 0;
var a = 0;
var time = 10;
function start(obj)
{
	setInterval(timer,1000);
}
function timer(){
	--time;
	if(time == 0){
		alert("时间到！任长江之无穷，岁月又饶过谁？");
		clearInterval(timer);
	}
	if(a == 0){
		alert("长者生命垂危，请为他延续1s寿命！");
		a = 1;
	}	
	if(time<=0)
	{
    	
    	
	var lastChild = gameDiv.children[lastIndex];
	lastChild.src="img/rip.jpg";
								
	
    	
    }
	else{
	mk.innerHTML = "";
	//产生一个0~8随机数
	var temp = Math.random()*8;
	//将可能产生的非整数四舍五入取整
	var index = Math.round(temp);
	//通过ID获取草坪的父类
	var contentDiv = document.getElementById("gameDiv")
	//找到相应整数的子类
	var child = contentDiv.children[index];
	//将草坪图片更换为蛤的图片路径
	child.src="img/20150817110029113.jpg";
	//获取上一次随机数并和本次相对比，如果两次随机数不同则还原上次的位置图片为草坪
	if(lastIndex != index){
	var lastChild = contentDiv.children[lastIndex];
	lastChild.src="img/caojpg.jpg";
}
	lastIndex = index;
	}
   }
var x = 0;
var mk = document.getElementById("mark");
function beat(obj)
{
	if(time<=0)
	{
    	alert("长者已逝！");
    	
    }
	else{
	//取出图片路径
	var srcstr= obj.src;
	//截取路径倒数第五位字符串,比对是否为蛤，是则加分
	if(srcstr.charAt(srcstr.length-5) =="3")
	{
		obj.src="img/caojpg.jpg";
		//点击生效后蛤还原为草坪
		mk.innerHTML = "+1s";
		//剩余时间+1s
		++time;
		//实现
		
		//
		x++;
		var op = document.getElementById("score");
		
		
		op.innerHTML = "长者的生命还剩"+"s";
		op.innerHTML = "您为长者续了"+x+"s";
	}
 }	
}
