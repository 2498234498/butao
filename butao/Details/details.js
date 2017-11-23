window.onload = function(){
	
	//header
	$(".header_inner a").hover(function(){
		$(this).css("color","#d41f2b");
	},function(){
		$(this).css("color","#555");
	})
	$(".header_inner ul li:nth-child(4) .select").hover(function(){
		$(this).css({"background":"#f0f0f0","border":"1px solid #ccc"});
		$(this).find("div").css({"display":"block"});
		$(this).find("ul").css("display","block");
		$(this).find("ul span").hover(function(){
			$(this).css("color","#d41f2b")
		},function(){
			$(this).css("color","#555")
		})
	},function(){
		$(this).css({"background":"#fff","border":"1px solid #fff"})
		$(this).find("div").css({"display":"none"})
		$(this).find("ul").css("display","none")
	})
	$(".header_inner ul li:eq(4) .select").hover(function(){
		$(this).css("display","block");
	},function(){
		$(this).css("display","none");
	})
	$(".header_inner ul li:nth-child(5) .select").hover(function(){
		$(this).css({"background":"#f0f0f0","border":"1px solid #ccc"});
		$(this).find("div").css({"background":"#F0F0F0"});
		$(this).find("ul").css("display","block");
		$(this).find("ul li").hover(function(){
			$(this).css("color","#d41f2b")
		},function(){
			$(this).css("color","#555")
		})
	},function(){
		$(this).css({"background":"#fff","border":"1px solid #fff"})
		$(this).find("div").css({"background":"#fff"})
		$(this).find("ul").css("display","none")
	})
	$(".header_inner ul li:nth-child(6) .select").hover(function(){
		$(this).css({"background":"#f0f0f0","border":"1px solid #ccc"});
		$(this).find("div").css({"background":"#F0F0F0"});
		$(this).find("ul").css("display","block");
		
	},function(){
		$(this).css({"background":"#fff","border":"1px solid #fff"})
		$(this).find("div").css({"background":"#fff"})
		$(this).find("ul").css("display","none")
	})
	
	//search
	$(".search_inner h6 a").hover(function(){
		$(this).css("color","#c1182a");
	},function(){
		$(this).css("color","#999999");
	})
	
	//nav
	$(".nav_inner ul li").hover(function(){
		$(this).css("background","#a90a0a");
		$(this).prev().css("color","#fe5252");
	},function(){
		$(this).css("background","#cf1b1b");
		$(this).prev().css("color","#fe5252");
	})
	
	//shopp
	$(".shopp_title").hover(function(){
		$(this).css({"color":"#dd2724"})
	},function(){
		$(this).css({"color":"#666"})
	})
	$(".shopp_r div").eq(2).children().find("a").mouseenter(function(){
		$(this).css("border","1px solid #dd2724").siblings().not($(this).parent().find("span")).css("border","1px solid #999");
	})
	$(".shopp_r div").eq(3).children().find("a").mouseenter(function(){
		$(this).css("border","1px solid #dd2724").siblings().not($(this).parent().find("span")).css("border","1px solid #999");
	})
	$(".btn_l").click(function(){
		var num = $(".num").html();
		if(num == 1){
			num = 1;
		}else{
			num--;
		}
		$(".num").html(num);
	})
	$(".btn_r").click(function(){
		var num = $(".num").html();
		num++;
		$(".num").html(num);
	})
	
	//放大镜
	$("#small").hover(function(){
		$("#mask").css("display","block");
		$("#big").css("display","block");
	},function(){
		$("#mask").css("display","none");
		$("#big").css("display","none");
	})
	$("#small").mousemove(function(e){
		var e = e || event;
		var x = e.pageX - $("#mask").width()/2 - $(".magnifyingGlass").position().left;
		var y = e.pageY - $("#mask").height()/2 - $(".magnifyingGlass").position().top;
		var maxL = $(".magnifyingGlass").width() - $("#mask").width() -2;
		var maxT = $(".magnifyingGlass").height() - $("#mask").height() -2;
		//边界处理
		x = x < 0 ? 0 : ( x > maxL ? maxL : x );//左右边界
		y = y < 0 ? 0 : ( y > maxT ? maxT : y );//左右边界
		$("#mask").css({"top":y,"left":x});
		//大图的宽度/小图宽度 = 大图的left / mask.left / =  大图显示区宽度 / 小图显示区（mask）宽度 (400 / 175)
		//改变mask的背景位置
		var bigImgLeft = x*$("#bigImg").width() / $("#smallImg").width();
		var bigImgTop = y*$("#bigImg").height() / $("#smallImg").height();
		$("#mask").css({"backgroundPositionX":-x,"backgroundPositionY":-y});
		$("#bigImg").css({"left":-bigImgLeft,"top":-bigImgTop});
	})
	
	//倒计时
	function showTime(){
		var time_start = new Date().getTime(); //设定当前时间
		var time_end = new Date("2017/11/20 00:00:00").getTime(); //设定目标时间
		//计算时间差
		var time_distance = time_end - time_start;
		//天
		var day = Math.floor(time_distance/86400000);
		time_distance -= day * 86400000;
		// 时
	    var hour = Math.floor(time_distance/3600000) 
	    time_distance -= hour * 3600000; 
	    // 分
	    var minute = Math.floor(time_distance/60000) 
	    time_distance -= minute * 60000; 
	    // 秒 
	    var second = Math.floor(time_distance/1000) 
	    // 时分秒为单数时、前面加零 
	    if(day < 10){ 
	        day = "0" + day; 
	    } 
	    if(hour < 10){ 
	        hour = "0" + hour; 
	    } 
	    if(minute < 10){ 
	        minute = "0" + minute; 
	    } 
	    if(second < 10){
	        second = "0" + second; 
	    }
	    // 显示时间 
	    $("#day").html(day); 
	    $("#hour").html(hour); 
	    $("#minute").html(minute); 
	    $("#second").html(second); 
	    // 设置定时器
	    var timer = setTimeout(showTime,1000);
	}
	showTime();
	
	//select
	var flag = true;
	$(".select ul li").click(function(){
		var str = $(this).find(".a1").html();
		if(str == "+"){
			str = "-";
		}else{
			str = "+";
		}
		$(this).find(".a1").html(str);
		if(flag){
			$(this).next().css("display","block");
			flag = false;
		}else{
			$(this).next().css("display","none");
			flag = true;
		}
	})
	$(".select ul li").hover(function(){
		$(this).find(".a2").css("color","red");
		$(this).next().find("a").hover(function(){
			$(this).css("color","red");
		},function(){
			$(this).css("color","#666");
		})
	},function(){
		$(this).find(".a2").css("color","#666");
	})
	
	//tabs
	$(".tabs_title li").click(function(){
		var index = $(this).index();
		$(this).css("background","#e4393c").siblings().css("background","#f7f7f7");
		
		$(this).find("a").css("color","#fff").end().siblings().find("a").css("color","#666666");
		if(index == 0){
			$(this).parent().next().css("display","block");
			$(this).parent().next().next().css("display","none");
		}else if(index == 1){
			$(this).parent().next().css("display","none");
			$(this).parent().next().next().css("display","block");
		}
	})
	
	//tab
	$(".tab li").click(function(){
		$(this).css("background","#e4393c").find(".tab_1").css("color","#fff").end().siblings().css("background","#f3f3f3").find(".tab_1").css("color","#666666");
		$(this).find(".tab_2").css("display","block").end().siblings().find(".tab_2").css("display","none");
	})
	$(".tab_2 li").off('click');
	
	//ajax
	$.ajax({
		type:"get",
		url:"details.json",
		async:true,
		success:function(json){
			var html = "";
			for(var i = 0;i < json.menShoe.length;i ++){
				html +=`<dl>
							<dt>
								<a href="javascript:;">
									<img src="${json.menShoe[i].src}" alt="" />
								</a>
							</dt>
							<dd>${i+1}</dd>
							<dd>${json.menShoe[i].sales}</dd>
							<dd>${json.menShoe[i].price}</dd>
						</dl>`
			}
			$(".tabs_list1").html(html);
			var html = "";
			for(var i = 0;i < json.womenShoe.length;i ++){
				html +=`<dl>
							<dt>
								<a href="javascript:;">
									<img src="${json.womenShoe[i].src}" alt="" />
								</a>
							</dt>
							<dd>${i+1}</dd>
							<dd>${json.womenShoe[i].sales}</dd>
							<dd>${json.womenShoe[i].price}</dd>
						</dl>`
			}
			$(".tabs_list2").html(html);
			var html = "";
			for(var i = 0;i < json.shoppImg.length;i ++){
				html +=`<img src="${json.shoppImg[i].src}"/>`
			}
			$(".BigImg").html(html);
		}
	})
}
