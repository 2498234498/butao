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
	//individuation
	$(".individuation_l ul").eq(0).find("li").eq(0).find("a").css({"background":"url(img/my_side_li.png) no-repeat 11px 3px","color":"#d41f2b","font-weight":"900"});
	$(".individuation_l ul li a").bind({
		mouseenter : function(){
			$(this).css({"background":"url(img/my_side_li.png) no-repeat 11px 3px","color":"#d41f2b","font-weight":"900"});
		},
		mouseleave : function(){
			$(this).css({"background":"","color":"#333333","font-weight":"100"});
		},
		click : function(){
			$(this).unbind("mouseleave");
			$(this).css({"background":"url(img/my_side_li.png) no-repeat 11px 3px","color":"#d41f2b","font-weight":"900"});
			var s1 = $(this).parent().parent().prev().html();
			var s2 = $(this).html();
			
				$(".individuation_r h2").eq(0).html("<span>"+s1+"   >&nbsp</span><span>"+s2+"</span>");
			
			$(this).parent().siblings().find("a").css({"color":"#333333","font-weight":"100","background":""}).bind({
				mouseenter : function(){
					$(this).css({"background":"url(img/my_side_li.png) no-repeat 11px 3px","color":"#d41f2b","font-weight":"900"});
				},
				mouseleave : function(){
					$(this).css({"background":"","color":"#333333","font-weight":"100"});
				}
			})
			$(this).parent().parent().siblings().find("a").css({"color":"#333333","font-weight":"100","background":""}).bind({
				mouseenter : function(){
					$(this).css({"background":"url(img/my_side_li.png) no-repeat 11px 3px","color":"#d41f2b","font-weight":"900"});
				},
				mouseleave : function(){
					$(this).css({"background":"","color":"#333333","font-weight":"100"});
				}
			})
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
