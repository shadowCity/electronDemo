
define(['text!./info.html'],function(tpl){
	var info={};
	 info={
	 	//props:["res"],
		name:"plantForm",
		template:tpl,
		data: function() {
			return {
				informationData:{
					name:"",
					sex:"",
					type:"",
					idCard:"",
					address:""
				}
				
			  }
		},
		watch: {
		    'informationData':  {
		       handler: function (val, oldVal) { 
		           this.$store.state.informationData = val;
			    },
	           deep: true
			    }
		   
		},
		mounted:function(){
			console.info(tpl)
		},
		methods: {
			     
			  }
		}
	return info;		
})





