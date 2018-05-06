var fs = require('fs')
var videosDir = './static/videos/'
var videoNames = fs.readdirSync(videosDir)
var videos = []
for (videoName of videoNames) {
	var video = {url: 'videos/' + videoName, name: videoName}
	videos.push(video)
}

module.exports = {
	'GET /api/videos': async (ctx, next) => {
		// console.log(videos);
		ctx.response.body = videos
	}


}