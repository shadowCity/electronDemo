
define(['jquery'],function($){
	var transfer={};
	 transfer={
	 	//props:["res"],
		name:"transfer",
		template:'<div id="transfer" class="transfer page">'  
    +'<div class="transferMain"><div class="back" @click="back">返回</div><Card style="width:350px">'
        +'<p slot="title">'
            +'<Icon type="ios-film-outline"></Icon>&nbsp'
            +'银行业务'
        +'</p>'
        +'<a href="#" slot="extra" @click.prevent="changeLimit">'
            +'<Icon type="ios-loop-strong"></Icon>'
            +'换一换'
       +' </a>'
        +'<ul>'
            +'<li v-for="item in randomMovieList">'
                +'<a :href="item.url" target="_blank">{{ item.name }}</a>'
                +'<span>'
                    +'<Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>'
                    +'<Icon type="ios-star-half" v-else></Icon>'
                    +'{{ item.rate }}'
                +'</span>'
            +'</li>'
        +'</ul>'
    +'</Card>'
    +'</div>'
    +'</div>',
		data: function() {
			return {
                movieList: [
                    {
                        name: '行内转账',
                        url: '',
                        rate: 9.6
                    },
                    {
                        name: '跨行转账',
                        url: '',
                        rate: 9.4
                    },
                    {
                        name: '汇率查询',
                        url: '',
                        rate: 9.5
                    },
                    {
                        name: '贷款',
                        url: '',
                        rate: 9.4
                    },
                    {
                        name: '信用卡',
                        url: '',
                        rate: 9.5
                    },
                    {
                        name: '外汇交易',
                        url: '',
                        rate: 9.2
                    },
                    {
                        name: '卡交易',
                        url: '',
                        rate: 9.4
                    },
                    {
                        name: '现金转账',
                        url: '',
                        rate: 9.2
                    },
                    {
                        name: '修改密码',
                        url: '',
                        rate: 9.3
                    },
                    {
                        name: '其他业务',
                        url: '',
                        rate: 9.2
                    }
                ],
                randomMovieList: []
			}
		},
		components: {
		  
		},
		mounted:function(){
			var self=this;
              $(".current").removeClass('current');
              $("#transfer").addClass('current');
              $("#transfer").show();
              this.changeLimit();

		},
		methods:{
            changeLimit:function () {
                this.randomMovieList = this.getArrayItems(this.movieList, 5);
            },
            getArrayItems:function(arr, num) {
                const temp_array = [];
                for (let index in arr) {
                    temp_array.push(arr[index]);
                }
                const return_array = [];
                for (let i = 0; i<num; i++) {
                    if (temp_array.length>0) {
                        const arrIndex = Math.floor(Math.random()*temp_array.length);
                        return_array[i] = temp_array[arrIndex];
                        temp_array.splice(arrIndex, 1);
                    } else {
                        break;
                    }
                }
                return return_array;
            },
            back:function(){
                  this.$router.push({name:"plantForm"})
            }
		}
	}
	return transfer;		
})





