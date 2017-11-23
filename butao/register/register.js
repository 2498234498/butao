window.onload = function(){
	//失去焦点验证每一项
	
	//验证邮箱
	var  flagEmail = null;
	$("#email").blur(function(){
		if( checkEmail( $(this).val() ) ){
			flagEmail = true;	
			$("#s1").css({"opacity":100,"background":"#8da22b"}).html("√");
			$("#s2").html("");
		}else{
			$("#s2").html("请输入邮箱");
			$("#s1").css({"opacity":100,"background":"red"}).html("×");
			flagEmail = false;
		}
	})
	
	//验证手机号码
	var  flagPhone = null;
	$("#phone").blur(function(){
		if( checkPhone( $(this).val() ) ){
			$("#s3").css({"opacity":100,"background":"#8da22b"}).html("√");
			$("#s4").html("");
			flagPhone = true;	
		}else{
			$("#s4").html("请输入手机号码");
			$("#s3").css({"opacity":100,"background":"red"}).html("×");
			flagPhone = false;
		}
	})
	
	//验证密码
	var  flagPwd = null;
	$("#psd").blur(function(){
		if( checkPwd( $(this).val() ) ){
			$("#s5").css({"opacity":100,"background":"#8da22b"}).html("√");
			$("#s6").html("");
			flagPwd = true;	
		}else{
			$("#s6").html("为了账户安全，建议最少为6个字符以上");
			$("#s5").css({"opacity":100,"background":"red"}).html("×");
			flagPwd = false;
		}
	})
	
	//判断两次密码是否一致
	var  flagQPwd = null;
	$("#repetitionPsd").blur(function(){
		if( checkQpwd( $("#psd").val(),$(this).val() ) ){
			$("#s7").css({"opacity":100,"background":"#8da22b"}).html("√");
			$("#s8").html("");
			flagQPwd = true;	
		}else{
			$("#s8").html("两次输入的密码不一致");
			$("#s7").css({"opacity":100,"background":"red"}).html("×");
			flagQPwd = false;
		}
	})
	
	//提交表单
	$("#form").submit(function(){
		//验证每一项
		if( flagEmail && flagPhone && flagPwd && flagQPwd ){
			var user = {
				email : $("#email").val(),
				username : $("#phone").val(),
				password : $("#psd").val()
			}
			setCookie( "user", JSON.stringify(user) );
			
			return true;
		}else{
			return false;
		}
	})
	//验证邮箱正则表达式
	function checkEmail(email){
		var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
		if( reg.test(email) ){
			return true;
		}else{
			return false;
		}
	}
	
	//验证手机号码的正则表达式
	function checkPhone(phone){
		var reg = /^1[3|4|5|7|8][0-9]{9}$/;
		if( reg.test(phone) ){
			return true;
		}else{
			return false;
		}
	}
	
	//验证密码的正则表达式
	function checkPwd(pwd){
		var reg = /^[a-zA-Z\d_]{8,}$/;
		if( reg.test(pwd) ){
			return true;
		}else{
			return false;
		}
	}
	
	//验证重复密码
	function checkQpwd(opwd,npwd){
		if( opwd == npwd && opwd!=""){
			return true;
			
		}else{
			return false;
		}
	}
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
