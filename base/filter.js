define(['base/base'], function(Base) {
    var Vue = null;
    var filter = {
        postVueData: function(V) {
            Vue = V;
            //单向过滤器
            //年-月-日 时：分：秒
            Vue.filter('dateTimeFormat', function(value) {
                //to do
                if (value == "") {
                    return "";
                }
                if (value == undefined) {
                    return "";
                }
                var data = new Date(value);
                var year = data.getFullYear();
                var month = data.getMonth() >= 9 ? (data.getMonth() + 1).toString() : '0' + (data.getMonth() + 1);
                var day = data.getDate() > 9 ? data.getDate().toString() : '0' + data.getDate();
                var hours = data.getHours() > 9 ? data.getHours().toString() : '0' + data.getHours();
                var minutes = data.getMinutes() > 9 ? data.getMinutes().toString() : '0' + data.getMinutes();
                var ss = data.getSeconds() > 9 ? data.getSeconds().toString() : '0' + data.getSeconds();
                value = year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + ss;
                return value;
            });
            //年-月-日
            Vue.filter('timeTransformTMD', function(value) {
                if (value == "") {
                    return "未知";
                }
                if (value == undefined) {
                    return "未知";
                }
                var data = new Date(value);
                var year = data.getFullYear();
                var month = data.getMonth() >= 9 ? (data.getMonth() + 1).toString() : '0' + (data.getMonth() + 1);
                var day = data.getDate() > 9 ? data.getDate().toString() : '0' + data.getDate();
                var hours = data.getHours() > 9 ? data.getHours().toString() : '0' + data.getHours();
                var minutes = data.getMinutes() > 9 ? data.getMinutes().toString() : '0' + data.getMinutes();
                var ss = data.getSeconds() > 9 ? data.getSeconds().toString() : '0' + data.getSeconds();
                value = year + "/" + month + "/" + day + " ";
                return value;
            });
            //年-月-日 时：分
            Vue.filter('timeTransformTMDHM', function(value) {
                //to do
                if (value == "0") {
                    value = "长期有效";
                } else {
                    var data = new Date(value);
                    var year = data.getFullYear();
                    var month = data.getMonth() >= 9 ? (data.getMonth() + 1).toString() : '0' + (data.getMonth() + 1);
                    var day = data.getDate() > 9 ? data.getDate().toString() : '0' + data.getDate();
                    var hours = data.getHours() > 9 ? data.getHours().toString() : '0' + data.getHours();
                    var minutes = data.getMinutes() > 9 ? data.getMinutes().toString() : '0' + data.getMinutes();
                    var ss = data.getSeconds() > 9 ? data.getSeconds().toString() : '0' + data.getSeconds();
                    value = year + "/" + month + "/" + day + " " + hours + ":" + minutes;
                }
                return value;
            });
            // 时：分 :秒
            Vue.filter('timeTransformSubLib', function(value) {
                //to do
                if (value == "0") {
                    value = "长期有效";
                } else {
                    var data = new Date(value);
                    var year = data.getFullYear();
                    var month = data.getMonth() >= 9 ? (data.getMonth() + 1).toString() : '0' + (data.getMonth() + 1);
                    var day = data.getDate() > 9 ? data.getDate().toString() : '0' + data.getDate();
                    var hours = data.getHours() > 9 ? data.getHours().toString() : '0' + data.getHours();
                    var minutes = data.getMinutes() > 9 ? data.getMinutes().toString() : '0' + data.getMinutes();
                    var ss = data.getSeconds() > 9 ? data.getSeconds().toString() : '0' + data.getSeconds();
                    value =  hours + ":" + minutes + ":" + ss;
                }
                return value;
            });
            // 时：分 :秒
            Vue.filter('timeTransformHMS', function(value) {
                //to do
                if (value == "0") {
                    value = "长期有效";
                } else {
                    var data = new Date(value);
                    var year = data.getFullYear();
                    var month = data.getMonth() >= 9 ? (data.getMonth() + 1).toString() : '0' + (data.getMonth() + 1);
                    var day = data.getDate() > 9 ? data.getDate().toString() : '0' + data.getDate();
                    var hours = data.getHours() > 9 ? data.getHours().toString() : '0' + data.getHours();
                    var minutes = data.getMinutes() > 9 ? data.getMinutes().toString() : '0' + data.getMinutes();
                    var ss = data.getSeconds() > 9 ? data.getSeconds().toString() : '0' + data.getSeconds();
                    value = year + "/" + month + "/" + day + " ";
                }
                return value;
            });
            // 年.月.日 时:分
            Vue.filter('timeTransformYYYYMMDDhhmm', function(value) {
                //to do
                if (value == "0") {
                    value = "长期有效";
                } else {
                    var oDate = new Date(value);
                    oYear = oDate.getFullYear();
                    oMonth = oDate.getMonth() + 1;
                    oDay = oDate.getDate();
                    oHour = oDate.getHours();
                    oMin = oDate.getMinutes();
                    value = oYear + "." + oMonth + '.' + oDay + " " + oHour + ":" + oMin; //最后拼接时间  
                }
                return value;
            });
            Vue.filter('isNull', function(value) {
                //to do
                if (value == "") {
                    return "";
                }
                if (value == undefined) {
                    return "";
                }else{
                    return value;
                }
            });

        }
    };
    return filter;
});
