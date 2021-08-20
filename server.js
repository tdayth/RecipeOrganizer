/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

// Setting up a static directory for the files in /pub
// using Express middleware.
app.use(express.static(path.join(__dirname, '/pub')))

// Let's make a route for an HTTP GET request to the
// 'root' of our app (i.e. top level domain '/')

app.get('/', (req, res) => {

	res.sendFile(path.join(__dirname, '/pub/examples.html'))
})

// will use an 'environmental variable', process.env.PORT, for deployment.
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})
