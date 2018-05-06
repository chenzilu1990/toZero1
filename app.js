// const fs = require('fs');

const Koa = require('koa')

const path = require('path')
	

const controller = require('./controller')

const bodyParase = require('koa-bodyparser')

// const router = require('koa-router')()
	
const static = require('koa-static')

const app = new Koa()

const staticPath = './static'



app.use(async (ctx, next) => {
	console.log(`process ${ctx.request.method} ${ctx.request.url} ^_^`)
	await next()
	// console.log(next)
})

app.use(static(
	// console.log('*******')
	path.join(__dirname, staticPath)
))


	


app.use(bodyParase())
app.use(controller())




app.listen(8888);

console.log('app start linsten port 8888...');
