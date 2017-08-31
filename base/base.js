define([], function() {
    var scope = {
        //获取国际化资源文件
        getNlsModuleData:function(module){
            var country=window.currentCountry;
            var dtd = $.Deferred();
            requirejs(["nls/"+country+"/"+module],function(nls){
                dtd.resolve(nls);
            });
            return dtd;
        },
        getAnasysData:function(buttonName){
            window.staffSpace.buttonName=buttonName
            // var now=new Date().getTime();
            // var stayTime=(now-window.startTime)/1000
            // console.info("来自路由: "+from.name+"  -------  到达路由: "+to.name)
             console.info("点击按钮为：    "+buttonName)
            // window.startTime=now;
        }
    }
    return scope;

});
