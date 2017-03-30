$(function (){
	
	//   开始时隐藏全部菜单
	function hideall(){
		$("#user_con").hide();
		
	}
	hideall();

//	// 根据传入的id 让其隐藏。
	function hide(obj){
	//	alert('"'+obj+'"');
		$(obj).hide();
	};
	function show(obj){
	//	alert('"'+obj+'"');
		$(obj).show();
	};
		
	
	
//	// 根据传入的id 让其显示。
//	function show(object obj){
//		$(obj).show();
//	};

$(".user-div").mouseover(function(){
	//alert("show")
	show("#user_con");
});	
	
$(".user-div").mouseout(function(){
	//alert("hide");
	hide("#user_con");
});		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
