define(['vue','vueRouter','module/index','module/plantForm','module/applyCard','module/transfer'],function(vue,vueRouter,index,plantForm,applyCard,transfer){
    vue.use(vueRouter)
	var router={
	  routes: [
	   {
	      path: '/index',
	      name: 'index',
	      component: index
	     },
	    {
	      path: '/plantForm',
	      name: 'plantForm',
	      component: plantForm
	     },	    {
	      path: '/applyCard',
	      name: 'applyCard',
	      component: applyCard
	     },  {
	      path: '/transfer',
	      name: 'transfer',
	      component: transfer
	     }
	  ]
    }
    var appRouter=new vueRouter(router);
	return appRouter;
})