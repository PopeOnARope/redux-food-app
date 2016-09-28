var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var app = new (require('express'))()

var db

//body parser is used to extract data from the submited form and add it to the body of the request
app.use(bodyParser.json({extended: true}))

var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

MongoClient.connect('mongodb://jvpope:viv12345@ds051368.mlab.com:51368/popedb', (err, database) => {
  console.log('connected to mongodb')
  if(err) return console.log(err)
  db = database
  app.listen(3000, function () {
    console.log('listening on port 3000')
  })
})

app.get('/', (req, res) => {
  var cursor = db.collection('quotes').find().toArray((err, results) => {
    console.log(results)
  })
  res.sendFile(__dirname + '/index.html')
})

app.get('/quotes', (req, res) => {
  var cursor = db.collection('quotes').find().toArray((err, results) => {
    console.log(results)
  })
  res.send(res.body)
})

app.post('/quotes', (req, res) => {
	console.log(req.body)
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err)
		console.log('saved to database')
		res.redirect('/')
	})
})
