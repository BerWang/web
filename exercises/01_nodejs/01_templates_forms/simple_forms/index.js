
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const handlebars = require('express-handlebars').create({defaultLayout: 'main'})
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const port = 8080

app.get('/postform', (req, res) => res.render('postform') )

app.get('/getform', (req, res) => res.render('getform') )

app.get ('/lists', (req, res) => res.render('lists') )

app.get ('/semantic', (req, res) => res.render('semantic') )

// this route processes data in the querystring
app.get('/', (req, res) => {
	const params = []
	for (const param in req.query) params.push({key: param, value: req.query[param]})
	res.render('home', {params: params})
})

// this route processes data in the request body
app.post('/', (req, res) => {
	const data = []
	for (const key in req.body) data.push({key: key, value: req.body[key]})
	res.render('post', {bodydata: data})
})

app.listen(port, () => console.log(`app listening on port ${port}`) )
