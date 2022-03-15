/////////////////////////////////
// Dependencies
/////////////////////////////////

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const GameRouter = require('../controllers/games')
const UserRouter = require('../controllers/user')
const session = require('express-session')
const MongoStore = require('connect-mongo')

/////////////////////////////////
// Middleware function
/////////////////////////////////

const middleware = (app) => {
	app.use(morgan('tiny'))
	app.use(methodOverride('_method'))
	app.use(express.urlencoded({ extended: false }))
	app.use(express.static('public'))
	app.use(express.static('images'))
	app.use(
		session({
			secret: process.env.SECRET,
			store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
			saveUninitialized: true,
			resave: false,
		})
	)
}

///////////////////////////////////////////
// export our Middleware function
///////////////////////////////////////////

module.exports = middleware
