$(function (){


$("#user-con").hide();
$(".home").hide();

/***
 * 参数：
 * selfId： 绑定对象的ID
 * optionId： 操作对象的ID
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


//   默认时隐藏全部菜单



});
