
define(['base/sysConfig','base/base','text!./index.html'],function(sysConfig,base,tpl){
	var index={};
	 index={
	 	//props:["res"],
		name:"plantForm",
		template:tpl,
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
			      	   var self=this;
			           base.getAnasysData("link")
			           $(e.currentTarget).addClass('enlarge-block');
			           setTimeout(function(){
			           	self.$router.push({name: modelName});
			           },100)
							//banner-center动画加载
			      },
			      test:function(){
						VirtualKeyboard.toggle('txt_Search', 'softkey');
						$("#kb_langselector,#kb_mappingselector,#copyrights").css("display", "none");
					},
				  blur:function(){
						//VirtualKeyboard.toggle('txt_Search', 'softkey');
					}

			  },

	}
	return index;		
})





