$(function (){
	
	
	
	var home = document.getElementById("home");
	var usercon = document.getElementById("user-con");
	usercon.style.display="none";
	home.style.display="none";
	
	
$("#user-con").hide();
$(".home").hide();
$(".hidebody").hide();
$(".modifypass").hide();
/***
 * 参数：
 * selfId： 绑定对象的ID
 * optionId： 操作对象的ID
 * sel 
 * 作用： 根据传入的    绑定对象的ID 添加 获得焦点入显示，失去焦点隐藏功能
 * */
var itemShowHide = function(selfId,optionId,a){
//	alert(selfId+ "---------"+optionId);
	
	$(selfId).mouseover(function(){
		$(optionId).show();
	});	
	$(selfId).mouseout(function(){
		$(optionId).hide();
	});	
	if(a===1){
		$(optionId).mouseover(function(){
			$(optionId).show();
		});	
		$(optionId).mouseout(function(){
			$(optionId).hide();
		});		
	}
}
itemShowHide(".user-div","#user-con",1);
itemShowHide(".home-div",".home",1);


$("#modpass").click(function (){
//	$(".hidebody").
	$(".hidebody").show();
	$(".modifypass").show();
});
$("#abolish").click(function (){
	$(".hidebody").hide();
	$(".modifypass").hide();
});

$(".left-gps").css({height:$(document).height()});
$(".hidebody").css({height:$(document).height()});


// 浏览器兼容 取得浏览器可视区高度   
function getWindowInnerHeight() {   
    var winHeight = window.innerHeight   
            || (document.documentElement && document.documentElement.clientHeight)   
            || (document.body && document.body.clientHeight);   
    return winHeight;   
       
}   
  
// 浏览器兼容 取得浏览器可视区宽度   
function getWindowInnerWidth() {   
    var winWidth = window.innerWidth   
            || (document.documentElement && document.documentElement.clientWidth)   
            || (document.body && document.body.clientWidth);   
    return winWidth;   
       
}   
var changeColor = function(selId){
	$(selId).click(function (){
	//	alert(selId);
		//$(selId).css({border-bottom:"1px",border-color:"red"});
		
	});
	
};

changeColor("#basic-information");

changeColor("#subordinate");


});
