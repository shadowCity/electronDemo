
define(['base/sysConfig','base/base'],function(sysConfig,base){
	var index={};
	 index={
	 	//props:["res"],
		name:"plantForm",
		template:'<div class="page current" id="home"><div class="home-top"><div class="left-section"><div><img src="./resource/img/system-logo.png"></div></div></div>'
			+'<div class="home-bottom"><div class="left-section title"><div><div>{{nlsData.titleName|isNull}}</div></div></div>'
			+'<div class="right-section"><div class="home-banner" v-for="item in module_data"><div class="home-block home_banner_one"  @click="link(item.model,$event)">{{item.name}}<br>'
			+'<div class="line"></div><span class="pesu-content"></span><div class="ps-content">'
			+'Personal<br> business'
								+'<br>'
							+'</div>'
							+'<img src="./resource/img/pencil.png" style="float:right">'
						+'</div>'
						+'<div class="overlay lay_1"></div>'
						+'<div class="home-block-bottom " :class="child.class" v-for="child in item.child">'
							+'<div class="contentsize">'
								+'<div class="chinSize">{{child.name}}</div>'
								 +'Debit card<br> application'
							+'</div>'
						+'</div>'
						+'<div class="clean"></div>'
						+'<div class="reflection ref_1"></div>'
						+'<div class="reflection ref_2"></div>'
					+'</div>'
				+'</div>'
			+'</div>'
			+'<div id="container" style="min-width:400px;height:400px"></div>'
		+'</div>',
			data: function() {
				return {
					nlsData:{},
				    module_data: [{
		                name: "个人业务",
		                model: 'plantForm',
		                child:[{
		                	 name: "储蓄卡申请",
		                     model: 'plantForm',
		                     class:"card_1"
		                     },
		                     {
		                	 name: "转账业务",
		                     model: 'plantForm',
		                     class:"card_2"
		                     }
		                     ]
		            }, {
		                name: '理财产品',
		                model: 'plantForm',
		                child:[{
		                	 name: "理财认购",
		                     model: 'plantForm',
		                     class:"card_1"
		                     },
		                     {
		                	 name: "理财签约",
		                     model: 'plantForm',
		                     class:"card_2"
		                     }
		                     ]
		            }],
				  }
			},
			mounted:function(){
				var self=this;
				base.getNlsModuleData('module/index').done(function(res){
					self.nlsData=res
				})
			 },
		     methods: {
			      link: function(modelName,e) {
			           base.getAnasysData("link")
			           this.$router.push({name: modelName});

							//banner-center动画加载
			      }
			  }
	}
	return index;		
})





