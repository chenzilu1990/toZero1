var data = {
	// src:''
	videos:[
		// {url: '',name: '', score: 0, CP: false}

	],
	testMsg:''
}

var vm = new Vue({
	el: "#app",
	data: data,
	created: function () {
		this.init()
	},
	methods: {
		init: function () {
			var that = this;
			that.$resource('api/videos').get().then(function(resp) {
				resp.json().then(function (result){
					// console.log(result)
					that.videos = result
					// for
				})
			},function (resp){
				alert('error')
			})
		}
	}
})


		


	