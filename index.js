// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

var prerender = require('prerender-node').set('prerenderToken', 'qHhhflfu7nZNKg5JKVzc');
prerender.crawlerUserAgents.push('googlebot');
prerender.crawlerUserAgents.push('bingbot');
prerender.crawlerUserAgents.push('yandex');
app.use(prerender);


// start the server listening for requests
app.listen(process.env.PORT ||  3000, 
	() => console.log("Server is running..."));