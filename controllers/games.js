/////////////////////////////////////////////////
////////////// DEPENDENCIES /////////////////////
/////////////////////////////////////////////////

const express = require('express')
const Game = require('../models/games')

/////////////////////////////////////////////////
////////////// ROUTER ///////////////////////////
/////////////////////////////////////////////////

const router = express.Router()

/////////////////////////////////////////////////
////////////// ROUTER MIDDLEWARE ////////////////
/////////////////////////////////////////////////

// create some middleware to protect these routes
// Authorization middleware
router.use((req, res, next) => {
	// checking the logged in boolean of our session
	if (req.session.loggedIn) {
		// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/user/login')
	}
})

/////////////////////////////////////////////////
////////////// ROUTES ///////////////////////////
/////////////////////////////////////////////////

// index all games
router.get('/', (req, res) => {
	// find the games
	Game.find({})
		// render template after they are found
		.then((games) => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			console.log(games)
			res.render('games/index', { games, username, loggedIn })
		})
		// show an error if there is one
		.catch((error) => {
			console.log(error)
			res.json({ error })
		})
})

// index that shows only the user's games
router.get('/mine', (req, res) => {
	// find the games
	Game.find({ owner: req.session.userId })
		// then render a template AFTER they're found
		.then((games) => {
			console.log(games)
			const username = req.session.username
			const loggedIn = req.session.loggedIn

			res.render('games/index', { games, username, loggedIn })
		})
		// show an error if there is one
		.catch((error) => {
			console.log(error)
			res.json({ error })
		})
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const username = req.session.username
	const loggedIn = req.session.loggedIn
	res.render('games/new', { username, loggedIn })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	// and since we've stored the id of the user in the session object
	// we can use it to set the owner property of the game upon creation.
	req.body.owner = req.session.userId
	Game.create(req.body)
		.then((game) => {
			console.log('this was returned from create', game)
			res.redirect('/games')
		})
		.catch((err) => {
			console.log(err)
			res.json({ err })
		})
})

// edit route -> GET that takes us to the edit form view

// update route -> sends a put request to our database

// show route

router.get('/:id', (req, res) => {
	// first, we need to get the id
	const gameId = req.params.id
	// then we can find a fruit by its id
	Game.findById(gameId)
	// .populate('comments.author')
		// once found, we can render a view with the data
		.then((game) => {
			console.log('the game we got\n', game)
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId
			res.render('games/show', { game, username, loggedIn, userId })
		})
		// if there is an error, show that instead
		.catch((err) => {
			console.log(err)
			res.json({ err })
		})
})

/////////////////////////////////////////////////
////////////// EXPORT ROUTER ////////////////////
/////////////////////////////////////////////////

module.exports = router

