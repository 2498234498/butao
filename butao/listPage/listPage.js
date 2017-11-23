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
	
	//list
	$(".list_inner .p1 a").hover(function(){
		$(this).not($(this).parent().find("a").eq(1)).css({"color":"#fff","background":"#f95a0e"}).next().not($(this).parent().find("a").eq(1)).css({"color":"#fff","background":"#f95a0e"})
		
	},function(){
		
		$(this).not($(this).parent().find("a").eq(1)).css({"color":"#38599e","background":""}).next().not($(this).parent().find("a").eq(1)).css({"color":"#999999","background":""})
	})
	$(".list_inner div .p2 a").hover(function(){
		$(this).not($(this).parent().find("a").eq(4)).css({"color":"#fff","background":"#f95a0e"}).next().not($(this).parent().find("a").eq(4)).css({"color":"#fff","background":"#f95a0e"})
		
	},function(){
		
		$(this).not($(this).parent().find("a").eq(4)).css({"color":"#38599e","background":""}).next().not($(this).parent().find("a").eq(4)).css({"color":"#999999","background":""})
	})
	$(".list_inner div .p3 a").hover(function(){
		$(this).not($(this).parent().find("a").eq(0)).css({"color":"#fff","background":"#f95a0e"}).next().not($(this).parent().find("a").eq(0)).css({"color":"#fff","background":"#f95a0e"})
		
	},function(){
		
		$(this).not($(this).parent().find("a").eq(0)).css({"color":"#38599e","background":""}).next().not($(this).parent().find("a").eq(0)).css({"color":"#999999","background":""})
	})
	//ajax
	$.ajax({
		type:"get",
		url:"listPage.json",
		async:true,
		success : function(json){
			//detailsPage
			var html = "";
			for(var i = 0;i < json.listPage.length;i ++){
				html +=`<dl>
							<dt>
								<a href="javascript:;">${json.listPage[i].product}</a>
							</dt>
							<dd>
								<a href="javascript:;">
									<img src="${json.listPage[i].src}" alt="" />
								</a>
							</dd>
							<dd>
								<span>¥</span>
								<span>${json.listPage[i].price}</span>
								<span>.00</span>
								<a href="javascript:;">
									<img src="img/qkk.jpg" alt="" />
								</a>
							</dd>
							<dd>
								<span>原价:</span>
								<span>${json.listPage[i].cost}</span>
								<span>折扣：</span>
								<span>${json.listPage[i].discount}</span>
								<span>折</span>
							</dd>
						</dl>`
			}
			$(".detailsPage_inner").html(html);
			$(".detailsPage_inner").find("dl").hover(function(){
				$(this).css("border","1px solid #a51100");
			},function(){
				$(this).css("border","1px solid #e5e5e5");
			})
			$(".detailsPage_inner dl dt a").hover(function(){
				$(this).css("color","#a51100");
			},function(){
				$(this).css("color","#555555");
			})
		}
	});
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
