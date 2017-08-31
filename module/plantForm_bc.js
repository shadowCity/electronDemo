
define(['swiper','jquery'],function(swiper,$){
	var plantForm={};
	 plantForm={
	 	//props:["res"],
		name:"plantForm",
		template: '<div class="page" id="businessSelection">'
	+'<div class="businessSelection-top">'
		+'<div class="title">'
			+'上下滑动进行交易选择'
			+'<br>'
			+'<span style="font-size:1.3rem;">Slide up and down to trade options </span>'
		+'</div>'
		+'<div class="buttonWrap">'
			+'<a class="pageBtn" @click="returnhome">返回</a>'
		+'</div>'
	+'</div>'
	+'<div class="businessSelection-bottom">'
		+'<div class="wrap_border_left">'
			+'<div class="swiper-container swiper-container-v">'
				+'<div class="swiper-wrapper">'
					+'<div class="swiper-slide swiper-v-wrapper">'
						+'<div class="swiper-container swiper-container-h">'
							+'<div class="tempt"></div>'
							+'<div class="tempt"></div>'
							+'<div class="swiper-wrapper">'
								+'<div class="swiper-slide" v-for="item in slideList">'
									+'<div class="swip-wrap-body hidden" id="CXKSQ" @click=goToChild(item.id)>'
										+'<div class="swip-wrap-header">'
											+'<img src="./resource/img/KJYMXCX.png">'
										+'</div>'
										+'<div class="swip-wrap-footer">'
											+'{{item.ch}}<br>{{item.en}}'
										+'</div>'
									+'</div>'
								+'</div>'
							+'</div>	'
						+'</div>'
					+'</div>'
					+'<div class="swiper-slide swiper-v-wrapper">'
						+'<div class="swiper-container swiper-container-h">'
							+'<div class="tempt"></div>'
							+'<div class="tempt"></div>'
							+'<div class="tempt"></div>'
							+'<div class="swiper-wrapper">'
								+'<div class="swiper-slide" v-for="item in slideList1" @click=goToChild(item.id)>'
									+'<div class="swip-wrap-body hidden">'
										+'<div class="swip-wrap-header">'
											+'<img src="./resource/img/KJYMXCX.png">'
										+'</div>'
										+'<div class="swip-wrap-footer">'
											+'{{item.ch}}<br>{{item.en}}'
										+'</div>'
									+'</div>'
								+'</div>'
							+'</div>'
						+'</div>'
					+'</div>'
					+'<div class="swiper-slide swiper-v-wrapper" v-for="item in slideList2">'
						+'<div class="swiper-container swiper-container-h">'
							+'<div class="tempt hidden"></div>'
							+'<div class="tempt hidden"></div>'
							+'<div class="swiper-wrapper">'
								+'<div class="swiper-slide">'
									+'<div class="swip-wrap-body " @click=goToChild(item.id1)>'
										+'<div class="swip-wrap-header">'
											+'<img src="./resource/img/YECX.png">'
										+'</div>'
										+'<div class="swip-wrap-footer">'
											+'{{item.ch1}}<br>{{item.en1}}'
										+'</div>'
									+'</div>'
								+'</div>'
								+'<div class="swiper-slide">'
									+'<div class="swip-wrap-body " @click=goToChild(item.id2)>'
										+'<div class="swip-wrap-header">'
											+'<img src="./resource/img/ZZHYECX.png">'
										+'</div>'
										+'<div class="swip-wrap-footer">'
											+'{{item.ch2}}<br>{{item.en2}}'
										+'</div>'
									+'</div>'
								+'</div>'
							+'</div>'
						+'</div>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>'
		+'<div class="line-v"></div>'
		+'<div class="wrap_border_right" style="overflow:hidden">'
			+'<div class="swiper-container" id="swipcontainerbottom">'
				+'<div class="swiper-wrapper">'
					+'<div class="swiper-slide" v-for="item in slideList3" @click=goToChild(item.id)>'
						+'<div class="son_title">'
							+'{{item.ch}}<br>{{item.en}}'
						+'</div>'
						+'<div class="son_content hidden">'
							+'{{item.details}}'
						+'</div>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>'
	+'</div>'
	+'<div class="banner-center">'
	+'</div>'
	+'<div class="right_top">'
		+'<img src="./resource/img/left.png">'
	+'</div>'
	+'<div class="right_down">'
		+'<img src="./resource/img/right.png">'
	+'</div>'
	+'<div class="leftbtn">'
		+'<span class="fa fa-chevron-left  fa-2x" ></span>'
	+'</div>'
	+'<div class="rightbtn" >'
		+'<span class="fa fa-chevron-right  fa-2x"></span>'
	+'</div>'
+'</div>',
		data: function() {
			return {
			 "slideList":[
			 {
			 	"ch":"储蓄卡申请",
			 	"en":"Savings card application",
			 	"id":"applyCard"
			 },
			 {
			 	"ch":"修改密码",
			 	"en":" Modify password",
			 	"id":"applyCard"
			 },{
			 	"ch":"其他业务",
			 	"en":"Modify password",
			 	"id":"applyCard"
			 }
			 ],
			 "slideList1":[
			 			 {
			 	"ch":"卡交易明细查询",
			 	"en":"Savings card application",
			 	"id":"applyCard"
			 },
			 {
			 	"ch":"外汇交易明细查询",
			 	"en":" Modify password",
			 	"id":"applyCard"
			 },{
			 	"ch":"理财明细查询",
			 	"en":"Modify password",
			 	"id":"applyCard"
			 },{
			 	"ch":"卡交易明细查询",
			 	"en":"Savings card application",
			 	"id":"applyCard"
			 },
			 {
			 	"ch":"余额查询",
			 	"en":" Modify password",
			 	"id":"applyCard"
			 },{
			 	"ch":"子账户余额查询",
			 	"en":"Modify password",
			 	"id":"applyCard"
			 }],
			 "slideList2":[
			 {
			 	"ch1":"跨行转账",
			 	"en1":" Cross bank transfer",
			 	"ch2":"行内转账",
			 	"en2":"Inline transfer",
			 	"id1":"transfer",
			 	"id2":"transfer"
			 },
						 {
			 	"ch1":"账号签约",
			 	"en1":"Account signing",
			 	"ch2":"银行卡签约",
			 	"en2":"Bank card signing",
			 	"id1":"transfer",
			 	"id2":"transfer"
			 },
						 {
			 	"ch1":"现金转账",
			 	"en1":"Cash transfer",
			 	"ch2":"现金存取",
			 	"en2":"Cash access",
			 	"id1":"transfer",
			 	"id2":"transfer"
			 }],
			 "slideList3":[{
			 	"ch":"常用业务",
			 	"en":"Common business",
			 	"details":"可以进行储蓄卡申请，密码修改等业务操作",
			 	"id":"applyCard"
			 },
			 {
			 	"ch":"查询业务",
			 	"en":" Modify password",
			 	"details":"可以进行查询余额，卡交易明细查询，子账户余额查询等相关业务",
			 	"id":"applyCard"
			 },{
			 	"ch":"转账业务",
			 	"en":"Money transfer business",
			 	"details":"可以进行行内转账，跨行转账等相关业务",
			 	"id":"applyCard"
			 },{
			 	"ch":"签约管理",
			 	"en":"Savings card application",
			 	"details":"可以进行签署业务约定,购买相应理财产品",
			 	"id":"applyCard"
			 },
			 {
			 	"ch":"现金业务",
			 	"en":" Modify password",
			 	"details":"可以进行现金兑换现金，或购买相应的贵金属产品",
			 	"id":"applyCard"
			 }],
			 "transition":{
				button : 50,
				page : 200
			},
			"tempbackground":2,
			"background_color": {
				a:"linear-gradient(to right,#FBCA87,#D0528D)",
				b:"linear-gradient(to right,#F2A2DA,#6064C5)",
				c:"linear-gradient(to right,#274465,#41798A)",
				d:"linear-gradient(to right,#D174A1,#764082)",
				e:"linear-gradient(to right,#A5DD93,#53CBF4)"
			}
			}
		},
		created:function(){
			var self=this;
	 		setTimeout(function() {
				self.goTo("#businessSelection");
				self.initSwiper();
				
				$(".swiper-container-home").addClass('show-swiper');
			},200);
				//page2加载动画
				//左侧纵向swiper
				$(".init").addClass('init-show-swiper');
				$(".swiper-v-wrapper").not(".init").addClass('init-show-swiper-block');
				$(".banner-center").addClass('init-banner-center');
				//右侧swiper动画加载
				setTimeout(function(){
					$(".wrap_border_right").find(".swiper-wrapper").addClass('init-show-swiper-block');
				},200);
		},
		methods:{
			goTo:function(pageID) {
				$(".current").removeClass('current');
				$(pageID).addClass('current');
				$(pageID).show();
				 $("#businessSelection").addClass('enlarge-block');
			},
			goToChild:function(modelName){
		         this.$router.push({name: modelName});
			},
			returnhome:function() {
				this.$router.push({name: "index"});
			},
			changeSwipefont:function(){
				$(".wrap_border_right .swiper-slide .son_content").addClass('hidden');
				$('.wrap_border_right .swiper-slide-active .son_content').removeClass('hidden');		
			 },
			 Square:function(){
				$(".swiper-v-wrapper").each(function(index,item) {
					$(this).find(".swip-wrap-body").addClass("hidden");
					$(this).find(".tempt").removeClass("hidden");
					$(this).find(".swiper-button-next").addClass("hidden");
					$(this).find(".swiper-button-prev").addClass("hidden");
					if($(this).hasClass("swiper-slide-active")){		
						$(this).find(".swip-wrap-body").removeClass('hidden');		
						$(this).find(".tempt").addClass("hidden");
						$(this).find(".swiper-button-next").removeClass("hidden");
						$(this).find(".swiper-button-prev").removeClass("hidden");
					}
				});
			},

		    initSwiper: function() {
				//右侧竖向swiper
				var self=this;
				var swiper = new Swiper('#swipcontainerbottom', {
					nextButton: '.right_top',
		       		prevButton: '.right_down',
					grabCursor : true,
					direction : 'vertical',	
					slidesPerView: 4,
					centeredSlides: true,
					initialSlide :2,
					onSlideChangeEnd:function(swiper){ 
						tempbackground = swiper.activeIndex;
					} ,
					onSlidePrevEnd: function(swiper){ 
						self.bannerCenterBg();
					},
					onSlideNextEnd: function(swiper){ 
						self.bannerCenterBg();
					},
					onAfterResize: function(swiper){
						self.initSwiper();
					},
				});

				//左侧竖向swiper
				var swiper_v = new Swiper('.swiper-container-v',{
					direction : 'vertical',	
					slidesPerView: 4,
					centeredSlides: true,
					//  parallax : true,
					initialSlide :2,
					// spaceBetween: -90,
					//swipeHandler : '.swipe-handler', //只能在固定的地方滑动swiper (若固定的地方不存在，则swiper无法进行滑动 swiper-handle就不存在)
					onlyExternal:true,	//值为true时，slide无法拖动，只能使用扩展API函数例如slideNext() 或slidePrev()或slideTo()等改变slides滑动。
					onSlidePrevEnd: function(swiper){ 
						self.Square(); 
						self.changeSwipefont();
					},
					onSlideNextEnd: function(swiper){ 
						self.Square();
						self.changeSwipefont();
					},
				})
				
				//左侧横向swiper
				var swiper_h = new Swiper('.swiper-container-h', {
					nextButton: '.leftbtn',
		       		prevButton: '.rightbtn',
					// centeredSlides : true,  //活动块默认居中
					slidesPerView: 3,		//显示几项
					slidesPerGroup : 3,	//在carousel mode下定义slides的数量多少为一组。
					// spaceBetween: 140,		//相邻两项的间距
					initialSlide :2,		//初始化索引	
					// slidesOffsetBefore : 10,	//slider距离swiper左边的距离。
					// slidesOffsetAfter : 170, //slider距离swiper右边的距离。
					grabCursor : true,
				});
				swiper.params.control = swiper_v; //swiper和swiper_v初始化后swiper控制swiper_v
			},
			//选中swiper的过度条背景颜色设置
			 bannerCenterBg :function(){
				if(this.tempbackground==0){
					 $('.banner-center').css('background-image',this.background_color.a);
				}else if(this.tempbackground==1){
					$('.banner-center').css('background-image',this.background_color.b);
				}else if(this.tempbackground==2){
					$('.banner-center').css('background-image',this.background_color.c);
				}else if(this.tempbackground==3){
					$('.banner-center').css('background-image',this.background_color.d);
				}else if(this.tempbackground==4){
					$('.banner-center').css('background-image',this.background_color.e);
				}
				// $('.banner-center').css('transition','background-image 1s linear');
			}

		}
	}
	return plantForm;		
})





