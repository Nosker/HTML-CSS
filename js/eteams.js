$(function (){
	
	//   开始时隐藏全部菜单
	function hideall(){
		$("#user_con").hide();
		
	}
//	hideall();

//	// 根据传入的id 让其隐藏。
	function hide(obj){
		$(obj).hide();
	};
	function show(obj){
		$(obj).show();
	};
		
	
	
	
	$(".user-div").mouseover(function(){
		show("#user_con");
	});	
		
	$(".user-div").mouseout(function(){
		hide("#user_con");
	});		
		
	$(".panel")	.mouseover(function(){
		show("#user_con");
	});	
		
	$(".panel")	.mouseout(function(){
		hide("#user_con");
	});	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
