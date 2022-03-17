/////////////////////////////////////////////////
////////////// DEPENDENCIES /////////////////////
/////////////////////////////////////////////////

require("dotenv").config() // make env variables available
const express = require("express")
const middleware = require('./utils/middleware')
const GameRouter = require('./controllers/games')
const CommentRouter = require('./controllers/comment')
const UserRouter = require('./controllers/user')
const User = require("./models/user")
// SEE MORE DEPENDENCIES IN ./utils/middleware.js
// user and resource routes linked in ./utils/middleware.js

/////////////////////////////////////////////////
///////// MIDDLEWARE + APP OBJECT ///////////////
/////////////////////////////////////////////////

const app = require("liquid-express-views")(express())

middleware(app)

/////////////////////////////////////////////////
////////////// ROUTES ///////////////////////////
/////////////////////////////////////////////////

app.use('/auth', UserRouter)
app.use('/games', GameRouter)
app.use('/comments', CommentRouter)

app.get('/', (req, res) => {
    const { username, userId, loggedIn } = req.session
	res.render('index.liquid', { loggedIn, username, userId })
})

app.get('/error', (req, res) => {
	const error = req.query.error || 'You rolled a natural 1, you cannot find the page you are looking for'
    const { username, loggedIn, userId } = req.session
	res.render('error.liquid', { error, username, loggedIn, userId })
})

// if page is not found, send to error page
app.all('*', (req, res) => {
	res.redirect('/error')
})

/////////////////////////////////////////////////
////////////// APP LISTENER /////////////////////
/////////////////////////////////////////////////

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})