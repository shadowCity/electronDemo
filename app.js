
define(['vue','base/filter','adapter'], function (Vue,filter,adapter){
	var app=null;
		 app={
			name:"app",
			template:'<div class="main-mask"><router-view></router-view></div>',
			data: function() {
				return {}
			},
		created:function(){
			var ada=new adapter()
			window.myAdapter=ada;
			filter.postVueData(Vue)
			this.$router.push({name: "index"});
		}
	}
	return app;

});