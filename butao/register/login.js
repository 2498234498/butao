
window.onload = function(){
	//页面加载取出cookie数据
	
	var obj = getCookie("user");
	//{email: "2498234498@qq.com", username: "13521773437", password: "1w1w1w1w1ww1"}
	
	var flagName = null;
	var flagPsd = null;
	//提交表单
	$("#form").submit(function(){
		//验证用户名
		if( $("#user").val() == obj.email || $("#user").val() == obj.username){
			$("#s2").html("");
			flagName = true;
		}else{
			$("#s2").html("用户名不存在");
			flagName = false;
		}
		//验证密码
		if( $("#psd").val() == obj.password){
			$("#s4").html("");
			flagPsd = true;
		}else{
			$("#s4").html("密码错误");
			flagPsd = false;
		}
		//验证用户名和密码是否都正确
		if( flagName && flagPsd ){
			return true;
		}else{
			return false;
		}
	})
	//link
	$(".link_inner a").hover(function(){
		$(this).css("color","black");
	},function(){
		$(this).css("color","#999");
	})
	
	//footer
	$(".footer_t a").hover(function(){
		$(this).css("color","#e8390d");
	},function(){
		$(this).css("color","#fff");
	})
}
