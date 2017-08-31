
requirejs.config({
    baseUrl: './',
　　paths: {
        'adapter':"adapter",
        'text':'lib/require/text',
        'css': 'lib/require/css',
　　　　"vue": "vue/vue",
        "vuex": "vue/vuex",
        "store":"vue/store/store",
        "vueRouter": "vue/vue-router",
        "router": "router/router",
        "iview":"lib/iview.min",
        "swiper":"lib/swiper.min",
        "main": "mainC",
        "app":"app",
        "jquery":"lib/jquery-2.1.4.min",
        "module":"module",
        "components":"components",
        "base":"base",
        "nls":"nls"
　　},
    env:"node",
    shim:{

    }
    // config: {
    //     text: {
    //        useXhr: function (url, protocol, hostname, port) {
                
    //             //Override function for determining if XHR should be used.
    //             //url: the URL being requested
    //             //protocol: protocol of page text.js is running on
    //             //hostname: hostname of page text.js is running on
    //             //port: port of page text.js is running on
    //             //Use protocol, hostname, and port to compare against the url
    //             //being requested.
    //             //Return true or false. true means "use xhr", false means
    //             //"fetch the .js version of this resource".
    //         }
    //     }
    // }
});

requirejs(["main"])

