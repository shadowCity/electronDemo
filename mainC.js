
requirejs(['vue','app','router','store','iview'], function (vue,app,router,store,iview){
	vue.use(iview)
	window.staffSpace.startTime=new Date().getTime();
	 new vue({
		el: '#index',
		store,
		router,
		components: {
		  'app': app
		},
		template: '<app/>',
	})
	router.afterEach(function(to,from){
		var now=new Date().getTime();
		var stayTime=(now-window.staffSpace.startTime)/1000
		console.info("来自路由: "+from.name+"  -------  到达路由: "+to.name)
    	console.info("停留于 ‘来自路由’ 时间为（s）:    "+stayTime)
    	window.staffSpace.startTime=now;
    	
    })
});