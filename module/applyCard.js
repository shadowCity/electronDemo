
define(['components/info','jquery'],function(info,$){
	var aa={};
	 aa={
	 	//props:["res"],
		name:"applyCard",
		template: '<div class="main-mask"><div class="page applyCard-wrap">'
            +'<div class="applyCard-header clearfix">'
                // +'<div class="header-left-section"><img src="./resource/img/system-logo.png" alt="" class="system-logo"></div>'
                +'<div class="header-right-section"><a class="pageBtn backBtn">返回</a></div>'
            +'</div>'
            +'<div class="applyCard-container clearfix">'
                +'<div class="container-title">'
                    +'<div class="step step-1 step-current">'
                        +'<h1>请插入您的身份证，开始办理业务</h1><h4>Please insert your id card, start to deal with business</h4>'
                    +'</div>'
                    +'<div class="step  step-2">'
                        +'<h1>拍个照吧，保持微笑</h1><h4>Take your picture, keep similing</h4>'
                    +'</div>'
                    +'<div class="step  step-3">'
                        +'<h1>阅读协议，让我们可以更好的合作</h1><h4>Read the agreement, so that we reach better coorperation</h4>'
                    +'</div>'
                    +'<div class="step  step-4">'
                        +'<h1>核对您的信息，没有错误就点击确认吧</h1><h4>Check your information, if there are no errors, click on the confirmation</h4>'
                    +'</div>'
                    +'<div class="step  step-5">'
                        +'<h1>签上您的名字，来做个约定吧</h1><h4>Sign your name to make a contract</h4>'
                   +' </div>'
                    +'<div class="step step-6">'
                        +'<h1>设置您的密码，不要告诉别人哦</h1><h4>Set your password, do not tell others</h4>'
                    +'</div>'
                    +'<div class="step step-7">'
                        +'<h1>留下您的联系方式，让我们保持联系</h1>'
                    +'</div>'
                    +'<div class="step step-9">'
                        +'<h1>不要忘记取走您的银行卡和身份证</h1>'
                    +'</div>'
                +'</div>'
                +'<div class="container-left-section">'
                   +' <div class="step-count-hint">'
                       +' <h2>您即将获得的银行卡</h2><h5>You are about to get the card</h5>'
                       +' <h2>还剩<span class="step-counter">6</span>步</h2><h5>And then there are four steps left</h5>'
                   +' </div>'
                   +' <div class="card-applying">'
                    +'    <label for="card-number">Card number.</label>'
                     +'   <div class="card-info" id="card-number">2345 7893 4563 8764</div>'
                     +'   <label for="sign-date">Moth/Year</label>'
                     +'   <div class="card-info" id="sign-date">06/2017</div>'
                     +'   <img src="./resource/img/yilian.png" alt="" class="yinlian-logo">'
                   +' </div>'
                +'</div>'
               +' <div class="container-right-section">'
                   +' <div class="step step-1 step-current" data-step=1><img  class="gotoNext" src="./resource/img/idcard.png" alt=""></div>'
                   +' <div class="step step-2 clearfix" data-step=2>'
                      +'  <div class="photo-preview"><img src="./resource/img/photo.png" alt=""></div>'
                       +' <div class="photo-taker ">'
                         +'   <a class="pageBtn">拍照</a><a class="pageBtn gotoNext">确认</a>'
                        +'    <h4 style="margin-top:1.1em;cursor:pointer;">不满意？再来一张</h4>'
                      +'  </div>'
                   +' </div>'
                    +'<div class="step step-3" data-step=3>'
                      +'  <div class="swiper-container-contractPreview">'
                        +'    <div class="swiper-wrapper">'
                           +'     <div class="swiper-slide"><img src="./resource/img/contractView.bmp" alt=""></div>'
                           +'     <div class="swiper-slide"><img src="./resource/img/contractView.bmp" alt=""></div>'
                           +'     <div class="swiper-slide"><img src="./resource/img/contractView.bmp" alt=""></div>'
                            +'    <div class="swiper-slide"><img src="./resource/img/contractView.bmp" alt=""></div>'
                             +'   <div class="swiper-slide"><img src="./resource/img/contractView.bmp" alt=""></div>'
                          +'  </div>'
                       +' </div>'
                       +' <a class="pageBtn msg-confirmBtn gotoNext" style="float:right ;margin-top: 50px;">确认</a>'
                    +'</div>'
                    +'<info></info>'
                   +' <div class="step step-5" data-step=5>'
                     +'   <div class="sign-board"></div>'
                     +'   <div class="sign-oprator"><a class="pageBtn">重签</a><a class="pageBtn gotoNext sign-confirmBtn">确认</a></div>'
                   +' </div>'
                   +' <div class="step step-6" data-step=6>'
                     +'   <div class="password-panel"><img src="./resource/img/passwordpanel.png" alt=""></div>'
                     +'   <div class="password">'
                      +'      <div><label for="">输入密码</label><input type="text"></div>'
                      +'      <div><label for="">确认密码</label><input required class="reInput" type="password" @focus="inputPassword"></div>'
                       +' </div>'
                    +'</div>'
                   +' <div class="step step-7" data-step=7>'
                      +'  <div class="contact">'
                        +'    <div><label for="">电话号码</label><input type="text"></div>'
                        +'    <div><label for="">验证码</label><input type="text"><a class="pageBtn check-confirmBtn">验证码</a></div>'
                       +' </div>'
                      +'  <a class="pageBtn card-confirmBtn gotoNext">确认</a>'
                   +' </div>'
                   +' <div class="step step-9" data-step=9>'
                       +' <div class="idcardback"><img src="./resource/img/idcardback.png" alt=""></div>'
                   +' </div>'
               +' </div>'
           +' </div>'
           +' <div class="applyCard-footer"><a class="pageBtn preStepBtn">上一步</a></div>'
        +'</div>'
        		+'<div class="page" id="businessProcess">'
			+'<div class="OutCardpng">'
				+'<div class="circular">'
					+'<div class="circular_in"><img src="./resource/img/DuiHao.png" class="SuccessPng hidden"></div>'
				+'</div>'
				+'<div class="rotefont">'
					+'<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>'
				+'</div>'
				+'<div class="Pagefont">'
					+'<div class="pageWait">'
						+'<h1>正在出卡，请稍候</h1>'
						+'<p>Is the card,please later</p>'
					+'</div>'
					+'<div class="pageSuccess hidden">'
						+'<h1>Success !</h1>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>'
    +'<div class="back-modal hidden">'
        +'<div class="modal-wrap">'
          +'  <div class="swiper-container-contractView">'
             +'   <div class="swiper-wrapper">'
               +'     <div class="swiper-slide"><img src="./resource/img/contractView.bmp" alt=""></div>'
                +'    <div class="swiper-slide"><img src="./resource/img/contractView.bmp" alt=""></div>'
                +'    <div class="swiper-slide"><img src="./resource/img/contractView.bmp" alt=""></div>'
                 +'   <div class="swiper-slide"><img src="./resource/img/contractView.bmp" alt=""></div>'
                   +' <div class="swiper-slide"><img src="./resource/img/contractView.bmp" alt=""></div>'
               +' </div>'
               +' <div class="swiper-pagination"></div>'
               +'<div class="swiper-button swiper-button-prev"></div>'
				+'<div class="swiper-button swiper-button-next"></div>'
           +' </div>'
       +' </div>'
   +' </div>'

    +'<div class="fingerprint-sign-modal hidden">'
        +'<div class="modal-wrap">'
          +'  <div class="hcontant">'
           +'     <h2>保持您的手指,</h2><h2>马上完成!</h2>'
           +' </div>'
           +' <div class="white-panel">'
            +'    <div class="sign-title">'
            +'        <p>您还没有识别指纹,</p><p>来识别吧!</p>'
             +'       <a class="pageBtn fingerprint-signBtn">好</a>'
             +'   </div>'
           +' </div>'
           +' <div class="fingerprint-viewer"><img src="./resource/img/fingerprinviewer.png" alt=""></div>'
            +'<div class="fingerprint-viewer mask hidden">'
              +'  <span  class="fa-stack"><i class="fa fa-check" aria-hidden="true"></i></span>'
          +'  </div>'
       +' </div>'
    +'</div></div>',
		data: function() {
			return {
              "currentStepNum" :1,
              "goToStepNum":null
			}
		},
		components: {
		  'info': info
		},
		mounted:function(){
			var self=this;
			$(".current").removeClass('current');
				$(".applyCard-wrap").addClass('current');
				$(".applyCard-wrap").show();
		    $.fn.extend({
		        animateCss: function (animationName,callback) {
		            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		            this.addClass('animated ' + animationName).one(animationEnd, function() {
		                $(this).removeClass('animated ' + animationName);
		            });
		            if(callback){
		                callback();
		            }
		        }
		    });
		  $(".container-left-section .card-applying").addClass('step-1');
		  $('.container-right-section .step.step-1').animateCss('zoomIn');

		        $('.container-right-section .step-6 .reInput').on('keydown',function(event){
		            if(event.keyCode == "13") {
		                self.currentStepNum = 6;
		                self.goToStepNum = self.currentStepNum + 1;
		                self.changeStep(self.goToStepNum);
		            }
		        }); 
		        //存储卡申请业务，流程步骤控制模拟
		        $('.container-right-section .step .gotoNext').on('click tap',function(event) {

		            self._stopPropagation(event);
		            var parent = $(this).parents('.container-right-section .step');
		            if(!parent.attr('data-step')){
		                return;
		            }
		            self.currentStepNum =parseInt(parent.attr('data-step'));
		            self.goToStepNum = self.currentStepNum + 1;
		            if(self.currentStepNum===5){
		                self.gotoSignFingerprint();
		                return;
		            }
		            self.changeStep(self.goToStepNum);
		        });

		        //点击上一步按钮，返回上一步
		        $('.preStepBtn').on('click tap',function(event){
		            self._stopPropagation(event);
		            self.goToStepNum = self.currentStepNum - 1;
		            self.goToPreStep(self.goToStepNum);
		        });

		        //点击协议书缩略图，展开预览
		        $('.swiper-container-contractPreview .swiper-slide img').on('click tap',function(event){
		            self._stopPropagation(event);
		            var activeSlide = $(this).parent().index();
		            $(".back-modal").removeClass('hidden');
		            self.initSwiper('contractView',activeSlide); 
		        });

		        //点击协议书预览图片，取消预览
		        $(".back-modal .swiper-slide").on('click tap',function(event){
		            self._stopPropagation(event);
		            $('.back-modal').addClass('hidden');
		            var activeSlide;
		            var activeSlide1 = $('.back-modal .swiper-slide.swiper-slide-active').index();
		            var activeSlide2 = $('.swiper-container-contractPreview .swiper-slide.swiper-slide-active').index();
		            if(activeSlide1>2&&activeSlide2===0){
		                activeSlide = 1;
		            }else if(activeSlide1<=2&&activeSlide2===1){
		                activeSlide = 3;
		            }else{
		                activeSlide = activeSlide1;
		            }
		            $('.swiper-container-contractPreview .swiper-slide').eq(activeSlide).addClass('animateOut');
		            self.initSwiper('contractView');
		            setTimeout(function(){
		                $('.swiper-container-contractPreview .swiper-slide').eq(activeSlide).removeClass('animateOut');
		            },500);
		        });

		        //确认进行指纹识别
		        $('.fingerprint-signBtn').on('click tap',function(event){
		            self._stopPropagation(event);
		            $('.sign-title').addClass('hidden');
		            $('.fingerprint-sign-modal .modal-wrap .white-panel').addClass('transiteRight');
		        });

		        //模拟监听指纹识别过程
		        $('.fingerprint-viewer').on('click tap',function(event){
		            self._stopPropagation(event);
		            $('.fingerprint-viewer.mask').removeClass('hidden');
		            $('.fingerprint-viewer.mask').addClass('animateBG');
		            $('.fingerprint-viewer .fa-stack .fa').addClass('animateCheckLabel');
		            setTimeout(function(){
		                $('.fingerprint-sign-modal').addClass('hidden');
		                $('.sign-title').removeClass('hidden');
		            $('.fingerprint-sign-modal .modal-wrap .white-panel').removeClass('transiteRight');
		                $('.fingerprint-viewer.mask').addClass('hidden');
		                $('.fingerprint-viewer.mask').removeClass('animateBG');
		                $('.fingerprint-viewer .fa-stack .fa').removeClass('animateCheckLabel');
		                self.changeStep(6);
		            },1000);
		        });

		        //点击返回按钮，返回系统二三级餐单预览页
		        $('.backBtn').on('click tap',function(event){
		            self._stopPropagation(event);
		            if($('.container-right-section .step.step-current').attr('data-step')&&($('.container-right-section .step.step-current').attr('data-step'))==='9'){
		                self.animateOutStep9();
		            }
		            if(self.currentStepNum===7){
		                self.animateOutStep7();
		            }
		            $('.step.step-'+self.currentStepNum).removeClass('step-current');
		            $('.step.step-1').addClass('step-current');
		            $(".container-left-section .card-applying").removeClass('step-'+self.currentStepNum);
		            $(".container-left-section .card-applying").addClass('step-1');
		            $('.step-counter').text('6');
		            self.$router.push({name: "plantForm"});
		        });




		},
		methods:{
			inputPassword:function(){
				setTimeout(function(){$(".main-mask").css("height","100%")},100)
				
			},
	        gotoSignFingerprint:function (){
	            $('.fingerprint-sign-modal').removeClass('hidden');
	        },

	        changeStep:function (goToStepNum,btnType){
	        	var self=this;
	            if(!goToStepNum){
	                return;
	            }
	            if(btnType && btnType==='preStepBtn'){
	                $('.step.step-'+(goToStepNum+1)).removeClass('step-current');
	                $('.step-counter').text(parseInt($('.step-counter').text())+1);
	                $(".container-left-section .card-applying").removeClass('step-'+(goToStepNum+1));
	                $(".container-left-section .card-applying").addClass('step-'+goToStepNum);
	            }else if(goToStepNum===8){
	                self.animateOutStep7();
	                $('.step.step-'+(goToStepNum-1)).removeClass('step-current');
	                $(".container-left-section .card-applying").removeClass('step-'+(goToStepNum-1));
	             $(".current").removeClass('current');
				$("#businessProcess").addClass('current');
				$("#businessProcess").show();
	                setTimeout(function() {
	                	$(".circular_in").addClass("transcircular_in");
	                	$(".rotefont").addClass("hidden");
	                    $(".Pagefont").css("top",'2rem');
	                	$(".circular").css('background','#2574AE');
	                	setTimeout(function() {
	                		// $(".circular_in").addClass("hidden");
	                		$(".circular").addClass('transcircular_wrapper');
	                		$(".pageWait").addClass("hidden");
	                		$(".SuccessPng").removeClass("hidden");
	                		$(".pageSuccess").removeClass("hidden");
	                        setTimeout(function() {
	                        	$(".current").removeClass('current');
	                        	$("#businessProcess").hide();
	                        	$(".applyCard-wrap").addClass('current');
				                $(".applyCard-wrap").show();
	                            self.$router.push({name: "applyCard"});
	                            self.changeStep(9);
	                        }, 1000);
	                	}, 500);
	                    
	                }, 2000);
	             
	            }else{
	            	 if(goToStepNum===5){
		              self.$store.commit("getInformationData");
		            }
	                $('.step.step-'+(goToStepNum-1)).removeClass('step-current');
	                $('.step-counter').text(parseInt($('.step-counter').text())-1);
	                $(".container-left-section .card-applying").removeClass('step-'+(goToStepNum-1));
	                $(".container-left-section .card-applying").addClass('step-'+goToStepNum);
	            }
	            if(goToStepNum ===3){self.initSwiper('contractPreview');}

	            if(goToStepNum ===6 || goToStepNum ===7){$('.container-right-section input').val('');}
	            
	            $('.step.step-'+ goToStepNum).addClass('step-current');
	            if(goToStepNum !==7&&goToStepNum!==9){
	                $('.container-right-section .step.step-'+ goToStepNum).animateCss('zoomIn');
	            }else if(goToStepNum===7){
	                self.animateInStep7();
	            }else{
	                self.animateInStep9();
	            }
	           self.currentStepNum = goToStepNum;
	        },

	        animateInStep7:function (){
	            $('.step-count-hint').addClass('invisible');
	            $('.card-applying').addClass('animateInStep7');
	            $('.container-right-section').addClass('animateInStep7');
	        },

	        animateOutStep7:function (){
	            $('.step-count-hint').removeClass('invisible');
	            $('.card-applying').removeClass('animateInStep7');
	            $('.container-right-section').removeClass('animateInStep7');
	        },

	       animateInStep9: function (){
	            $('.step-count-hint').addClass('invisible');
	            $('.preStepBtn').addClass('invisible');
	            $('.card-applying').addClass('animateInStep9');
	            $('.container-right-section').addClass('animateInStep9');
	        },

	        animateOutStep9:function (){
	            $('.step-count-hint').removeClass('invisible');
	            $('.preStepBtn').removeClass('invisible');
	            $('.card-applying').removeClass('animateInStep9');
	            $('.container-right-section').removeClass('animateInStep9');
	        },

	        //返回上一步
	        goToPreStep:function (goToStepNum){
	        	var self=this
	            if(!goToStepNum && goToStepNum!==0){
	                return;
	            }else if(goToStepNum===0){
	                // alert('此时应返回二三级菜单页');
	                self.$router.push({name: "plantForm"});
	                self.currentStepNum = 1;
	                return;
	            }
	            if(goToStepNum===6){
	                self.animateOutStep7();
	            }
	            self.changeStep(goToStepNum,'preStepBtn');
	        },

	       initSwiper: function (selector,activeIndex) {
	       	var self=this
	            var optionContractPreview = {
	                width : 600,
	                slidesPerView: 3,
	                slidesPerGroup : 3,
	                initialSlide:0,
	                grabCursor : true,
	                runCallbacksOnInit : true,
	                slidesOffsetBefore: 9,
	                slidesOffsetAfter: -9,
	                onInit: function(swiper){
	                    swiper.slideTo(0, 0, false);
	                },
	                onAfterResize: function(swiper){
	                   self.initSwiper('contractPreview');
	                },
	            };
	            var optionContractView={
	                initialSlide:activeIndex,
	                pagination : '.swiper-pagination',
	                paginationType : 'bullets',
	                paginationClickable :true,
	                paginationBulletRender: function (swiper, index, className) {
	                    return '<span class="' + className + '">' + (index + 1) + '</span>';
	                },
	                onSlideChangeEnd:function(swiper){
	                    var activeIndex = swiper.activeIndex;
	                    $('.swiper-pagination').find('span')
	                    .eq(activeIndex)
	                    .addClass('swiper-pagination-bullet-active')
	                    .siblings()
	                    .removeClass('swiper-pagination-bullet-active');
	                },
	                prevButton:'.swiper-button-prev',
	                nextButton:'.swiper-button-next',
	                grabCursor : true
	            };
	            var option = (selector ==='contractPreview')?optionContractPreview:optionContractView;
	            
	            if(selector==='contractPreview'){
	                var swiperPreview = new Swiper('.swiper-container-'+selector, option);
	                // $('.swiper-container-contractPreview .swiper-slide').css('width','200px');
	            }else{
	                var swiperView = new Swiper('.swiper-container-'+selector, option);
	            }
	        },
	        _stopPropagation:function (e){
	            if ( e && e.stopPropagation )
	            　　e.stopPropagation();
	            else
	            　　window.event.cancelBubble = true;
	        }
		}
	}
	return aa;		
})





