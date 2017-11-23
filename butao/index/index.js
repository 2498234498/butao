window.onload = function(){
	//fixedLeft
	var arr = ["#title","#womenWear","#menWear","#designerShoesPackage","#house","#cate"];
	$("#fixedLeft li:not(.last,.li1)").click(function(){
		var index = $(this).index() - 1;
		$("body,html").animate({"scrollTop" : $(arr[index]).offset().top },1000);
	})
	$("#fixedLeft li:not(.li1)").hover(function(){
		$(this).find("span").css("opacity","0").end().css("border","1px solid red");
		
	},function(){
		$(this).find("span").css("opacity","100").end().css("border","1px solid #e6e6e6");
	})
	$(".li1").hover(function(){
		$(this).find("span").css("opacity",100).end().css("border","1px solid red");
	},function(){
		$(this).find("span").css("opacity",0).end().css("border","1px solid #e6e6e6");
	})
	//点击top  回到顶部
	$(".last,#fixedRight ul li:eq(4)").click(function(){
		$("body,html").animate({"scrollTop" : 0 },1000);
	})
	
	//fixedRight
	$("#fixedRight ul li").hover(function(){
		$(this).find("span").animate({"left":-58},500).end().find("a").css("background-color","red")
	},function(){
		$(this).find("span").animate({"left":35},500).end().find("a").css("background-color","#666666")
	})
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

	//ajax
	$.ajax({
		type:"get",
		url:"json.json",
		async:true,
		success:function(json){
			//banner
			var str = json.banner;
			var html = "";
			var ul = "";
			for(var i = 0;i < str.length;i ++){
				html +=`<a href="javascript:;">
							<img src="${str[i].src}" alt="" />
					   </a>`;
				ul +=`<li>${i+1}</li>`
			}
			$(".banner_inner div").html(html);
			$(".banner_inner ul").html(ul);
			var index = 0;
			var timer = setInterval(autoPlay , 3000);
			
			$(".banner_inner").hover(function(){
				//移入banner时 先清除计时器
				clearInterval(timer)
				$(this).find(".btn_l,.btn_r").css("opacity","100");
			},function(){
				//移出banner时 重新开启计时器
				timer = setInterval(autoPlay , 3000);
				$(this).find(".btn_l,.btn_r").css("opacity","0");
			})
			$(".banner_ul li").hover(function(){
				//移入li时 记录当前的下标
				var index = $(this).index();
				$(this).css({"background":"#5cb1ea","color":"#fff"}).siblings().css({"background":"#fff","color":"black"});
				$(".banner_img a").eq(index).children().fadeIn(500).end().siblings().children().fadeOut(500);
			},function(){
				//移出是 记录当前的下标
				index = $(this).index();
			})
			$(".btn_r").click(function(){
				
				index++;
				if(index>4){
					index =0;
				}
				
				//点击时 清除计时器防止干扰
				clearInterval(timer);
				
				$(".banner_ul li").eq(index).css({"background":"#5cb1ea","color":"#fff"}).siblings().css({"background":"#fff","color":"black"});
				
				$(".banner_img a").eq(index).children().fadeIn(500).end().siblings().children().fadeOut(500);
				
			})
			$(".btn_l").click(function(){
				index--;
				//点击时 清除计时器防止干扰
				clearInterval(timer);
				
				
				$(".banner_ul li").eq(index).css({"background":"#5cb1ea","color":"#fff"}).siblings().css({"background":"#fff","color":"black"});
				$(".banner_img a").eq(index).children().fadeIn(500).end().siblings().children().fadeOut(500);
				if(index<0){
					index =4;
				}
			
			})
			function autoPlay(){
				

				if(index==4){
					index = 0;
				}else{
					index ++;
				}
				$(".banner_ul li").eq(index).css({"background":"#5cb1ea","color":"#fff"}).siblings().css({"background":"#fff","color":"black"});
				$(".banner_img a").eq(index).children().fadeIn(500).end().siblings().children().fadeOut(500);
			}
			//shoe
			var html = "";
			for(var i = 0;i < json.shoe.length;i ++){
				html +=`<dl>
							<dt>
								<img src="${json.shoe[i].src}" alt="" />
							</dt>
							<dd class="d1">
								<a href="http://127.0.0.1/butao/Details/details.html">${json.shoe[i].describe}</a>
							</dd>
							<dd class="d2">
								<div class="price">${json.shoe[i].price}</div>
								<div class="discount">
									<span>${json.shoe[i].discount1}</span>
									<span>${json.shoe[i].discount2}</span>
									<div>新品上市</div>
								</div>
								<a href="javascript:;">立即购买</a>
							</dd>
						</dl>`
			}
			$(".shoe_inner").html(html);
			
			$(".shoe_inner dl").hover(function(){
				$(this).css("border","1px solid #e70012");
				
			},function(){
				$(this).css("border","1px solid #d7d3d3");
				
			})
			$(".shoe_inner dl .d1 a").hover(function(){
				$(this).css("color","#e70012");
			},function(){
				$(this).css("color","#343434");
			})
			
			//womenWearList
			var html = "";
			for(var i = 0;i < json.womenWearList.length;i ++){
				html = `<div>
							<a href="javascript:;">
								<img src="${json.womenWearList[i].src1}" alt="" />
							</a>
						</div>
						<dl>
							<dt>${json.womenWearList[i].txt1}</dt>
							<dd>${json.womenWearList[i].txt2}</dd>
							<dd>
								<a href="javascript:;">
									<img src="${json.womenWearList[i].src2}" alt="" />
								</a>
							</dd>
						</dl>
						<dl>
							<dt>${json.womenWearList[i].txt3}</dt>
							<dd>${json.womenWearList[i].txt4}</dd>
							<dd>
								<a href="javascript:;">
									<img src="${json.womenWearList[i].src3}" alt="" />
								</a>
							</dd>
						</dl>`
			}
			$(".womenWearList_inner").html(html);
			//menWearList
			var html = "";
			for(var i = 0;i < json.menWearList.length;i ++){
				html = `<div>
							<a href="javascript:;">
								<img src="${json.menWearList[i].src1}" alt="" />
							</a>
						</div>
						<dl>
							<dt>${json.menWearList[i].txt1}</dt>
							<dd>${json.menWearList[i].txt2}</dd>
							<dd>
								<a href="javascript:;">
									<img src="${json.menWearList[i].src2}" alt="" />
								</a>
							</dd>
						</dl>
						<dl>
							<dt>${json.menWearList[i].txt3}</dt>
							<dd>${json.menWearList[i].txt4}</dd>
							<dd>
								<a href="javascript:;">
									<img src="${json.menWearList[i].src3}" alt="" />
								</a>
							</dd>
						</dl>`
			}
			$(".menWearList_inner").html(html);
			//clothing
			var html = "";
			for(var i = 0;i < json.clothing.length;i ++){
				html +=`<dl>
							<dt>
								<img src="${json.clothing[i].src}" alt="" />
							</dt>
							<dd class="d1">
								<a href="javascript:;">${json.clothing[i].describe}</a>
							</dd>
							<dd class="d2">
								<div class="price">${json.clothing[i].price}</div>
								<div class="discount">
									<span>${json.clothing[i].discount1}</span>
									<span>${json.clothing[i].discount2}</span>
									<div>新品上市</div>
								</div>
								<a href="javascript:;">立即购买</a>
							</dd>
						</dl>`
			}
			$(".clothing_inner").html(html);
			$(".clothing_inner dl").hover(function(){
				$(this).css("border","1px solid #2050a4");
				
			},function(){
				$(this).css("border","1px solid #d7d3d3");
				
			})
			$(".clothing_inner dl .d1 a").hover(function(){
				$(this).css("color","#e70012");
			},function(){
				$(this).css("color","#343434");
			})
			//designerShoesPackageList
			var html = "";
			for(var i = 0;i < json.designerShoesPackageList.length;i ++){
				html = `<div>
							<a href="javascript:;">
								<img src="${json.designerShoesPackageList[i].src1}" alt="" />
							</a>
						</div>
						<dl>
							<dt>${json.designerShoesPackageList[i].txt1}</dt>
							<dd>${json.designerShoesPackageList[i].txt2}</dd>
							<dd>
								<a href="javascript:;">
									<img src="${json.designerShoesPackageList[i].src2}" alt="" />
								</a>
							</dd>
						</dl>
						<dl>
							<dt>${json.designerShoesPackageList[i].txt3}</dt>
							<dd>${json.designerShoesPackageList[i].txt4}</dd>
							<dd>
								<a href="javascript:;">
									<img src="${json.designerShoesPackageList[i].src3}" alt="" />
								</a>
							</dd>
						</dl>`
			}
			$(".designerShoesPackageList_inner").html(html);
			//houseList
			var html = "";
			for(var i = 0;i < json.houseList.length;i ++){
				html = `<div>
							<a href="javascript:;">
								<img src="${json.houseList[i].src1}" alt="" />
							</a>
						</div>
						<dl>
							<dt>${json.houseList[i].txt1}</dt>
							<dd>${json.houseList[i].txt2}</dd>
							<dd>
								<a href="javascript:;">
									<img src="${json.houseList[i].src2}" alt="" />
								</a>
							</dd>
						</dl>
						<dl>
							<dt>${json.houseList[i].txt3}</dt>
							<dd>${json.houseList[i].txt4}</dd>
							<dd>
								<a href="javascript:;">
									<img src="${json.houseList[i].src3}" alt="" />
								</a>
							</dd>
						</dl>`
			}
			$(".houseList_inner").html(html);
			//cateList
			var html = "";
			for(var i = 0;i < json.cateList.length;i ++){
				html = `<div>
							<a href="javascript:;">
								<img src="${json.cateList[i].src1}" alt="" />
							</a>
						</div>
						<dl>
							<dt>${json.cateList[i].txt1}</dt>
							<dd>${json.cateList[i].txt2}</dd>
							<dd>
								<a href="javascript:;">
									<img src="${json.cateList[i].src2}" alt="" />
								</a>
							</dd>
						</dl>
						<dl>
							<dt>${json.cateList[i].txt3}</dt>
							<dd>${json.cateList[i].txt4}</dd>
							<dd>
								<a href="javascript:;">
									<img src="${json.cateList[i].src3}" alt="" />
								</a>
							</dd>
						</dl>`
			}
			$(".cateList_inner").html(html);
			var html = "";
			for(var i = 0;i < json.goodsList.length;i ++){
				html +=`<dl>
							<dt>${json.goodsList[i].title}</dt>
							<dd>
								<img src="${json.goodsList[i].src}" alt="" />
							</dd>
							<dd>
								<a href="javascript:;">${json.goodsList[i].a1}</a>
								<a href="javascript:;">${json.goodsList[i].a2}</a>
								<a href="javascript:;">${json.goodsList[i].a3}</a>
								<a href="javascript:;">${json.goodsList[i].a4}</a>
							</dd>
							<dd>
								<img src="${json.goodsList[i].src_line}" alt="" />
							</dd>
						</dl>`
			}
			$(".goodsList_inner").html(html);
			$(".goodsList_inner a").hover(function(){
				$(this).css({"text-decoration":"underline","color":"black"});
			},function(){
				$(this).css({"text-decoration":"none","color":"#5f5e5f"});
			})
		}
	});
	//title_inner
	$(".title_inner li a").mouseenter(function(){
		$(this).css("color","#ff0000").parent().siblings().not($(".title_inner li").eq(0)).children().css("color","#494747");
	})
	$(".title_inner li").eq(0).children().off("mouseenter");
	
	//womenWear
	$(".womenWear_inner li a").mouseenter(function(){
		$(this).css("color","#ff0000").parent().siblings().not($(".womenWear_inner li").eq(0)).children().css("color","#494747");
	})
	$(".womenWear_inner li").eq(0).children().off("mouseenter");
	$(".womenWear_inner p a").hover(function(){
		$(this).css("color","#ff0000");
	},function(){
		$(this).css("color","#494747");
	})
	//menWear
	$(".menWear_inner li a").mouseenter(function(){
		$(this).css("color","#ff0000").parent().siblings().not($(".menWear_inner li").eq(0)).children().css("color","#494747");
	})
	$(".menWear_inner li").eq(0).children().off("mouseenter");
	$(".menWear_inner p a").hover(function(){
		$(this).css("color","#ff0000");
	},function(){
		$(this).css("color","#494747");
	})
	//designerShoesPackage
	$(".designerShoesPackage_inner li a").mouseenter(function(){
		$(this).css("color","#ff0000").parent().siblings().not($(".designerShoesPackage_inner li").eq(0)).children().css("color","#494747");
	})
	$(".designerShoesPackage_inner li").eq(0).children().off("mouseenter");
	$(".designerShoesPackage_inner p a").hover(function(){
		$(this).css("color","#ff0000");
	},function(){
		$(this).css("color","#494747");
	})
	//house
	$(".house_inner li a").mouseenter(function(){
		$(this).css("color","#ff0000").parent().siblings().not($(".house_inner li").eq(0)).children().css("color","#494747");
	})
	$(".house_inner li").eq(0).children().off("mouseenter");
	$(".house_inner p a").hover(function(){
		$(this).css("color","#ff0000");
	},function(){
		$(this).css("color","#494747");
	})
	
	//cate
	$(".cate_inner li a").mouseenter(function(){
		$(this).css("color","#ff0000").parent().siblings().not($(".cate_inner li").eq(0)).children().css("color","#494747");
	})
	$(".cate_inner li").eq(0).children().off("mouseenter");
	$(".cate_inner p a").hover(function(){
		$(this).css("color","#ff0000");
	},function(){
		$(this).css("color","#494747");
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
