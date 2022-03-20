//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// DEPENDENCIES //////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const express = require('express')
const Game = require('../models/games')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// APP ///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const app = require("liquid-express-views")(express())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// APP MIDDLEWARE ////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// < -------- Authorization middleware -> create some middleware to protect these routes -------------------->

app.use((req, res, next) => {
	// checking the logged in boolean of our session
	if (req.session.loggedIn) {
		// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/user/login')
	}
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// ROUTES ////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <---------- index route -> all games --------------------------------------------------------------------->

// index all games
app.get('/', (req, res) => {
	// find the games
	Game.find({})
		Game.aggregate( [ { $sort : { system : 1 } } ] )
		// render template after they are found
		.then((games) => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			// console.log(games)
			res.render('games/index', { games, username, loggedIn })
		})
		// show an error if there is one
		.catch((error) => {
			console.log(error)
			res.json({ error })
		})
})

// <---------- index routes -> sort by system --------------------------------------------------------------->

// index  - sort by system: coyote & crow

app.get('/coyoteandcrow', (req, res) => {
	// find the games
	Game.find({ system: "Coyote & Crow" })
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

// index  - sort by system: dungeons and dragons 5th edition

app.get('/dnd', (req, res) => {
	// find the games
	Game.find({ system: "Dungeons & Dragons 5th Edition" })
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

// index  - sort by system: forged in the dark

app.get('/fitd', (req, res) => {
	// find the games
	Game.find({ system: "Forged in the Dark" })
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

// index  - sort by system: forged in iron

app.get('/forgediniron', (req, res) => {
	// find the games
	Game.find({ system: "Forged in Iron" })
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

// index  - sort by system: old school renaissance

app.get('/osr', (req, res) => {
	// find the games
	Game.find({ system: "Old School Renaissance" })
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

// index  - sort by system: powered by the apocalypse

app.get('/pbta', (req, res) => {
	// find the games
	Game.find({ system: "Powered by the Apocalypse" })
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

// index  - sort by system: powered by zweihander

app.get('/zweihander', (req, res) => {
	// find the games
	Game.find({ system: "Powered by Zweihander" })
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

// index  - sort by system: stellar remnants

app.get('/stellaremnants', (req, res) => {
	// find the games
	Game.find({ system: "Stellar Remnants" })
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

// <---------- index routes -> sort by genre ----------------------------------------------------------------->

// index  - sort by genre: cyberpunk 

app.get('/cyberpunk', (req, res) => {
	// find the games
	Game.find({ genres: "Cyberpunk" })
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

// index  - sort by genre: fantasy 

app.get('/fantasy', (req, res) => {
	// find the games
	Game.find({ genres: "Fantasy" })
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

// index  - sort by genre: dark fantasy 

app.get('/darkfantasy', (req, res) => {
	// find the games
	Game.find({ genres: "Dark Fantasy" })
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

// index  - sort by genre: sci-fi 

app.get('/scifi', (req, res) => {
	// find the games
	Game.find({ genres: "Sci-Fi" })
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

// index  - sort by genre: science fantasy

app.get('/sciencefantasy', (req, res) => {
	// find the games
	Game.find({ genres: "Science Fantasy" })
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

// index  - sort by genre: steampunk 

app.get('/steampunk', (req, res) => {
	// find the games
	Game.find({ genres: "Steampunk" })
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

// index  - sort by genre: urban fantasy

app.get('/urbanfantasy', (req, res) => {
	// find the games
	Game.find({ genres: "Urban Fantasy" })
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

// index  - sort by genre: genre agnostic

app.get('/genreagnostic', (req, res) => {
	// find the games
	Game.find({ genres: "Genre Agnostic" })
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

// <---------- index routes -> sort by game type ------------------------------------------------------------->

// index  - sort by game type: GM

app.get('/gm', (req, res) => {
	// find the games
	Game.find({ gametypes: "GM" })
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

// index  - sort by game type: GM-Less

app.get('/gmless', (req, res) => {
	// find the games
	Game.find({ gametypes: "GM-less" })
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

// index  - sort by game type: Solo

app.get('/solo', (req, res) => {
	// find the games
	Game.find({ gametypes: "Solo" })
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

// <---------- index route -> users games -------------------------------------------------------------------->

// index that shows only the user's games

app.get('/mine', (req, res) => {
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

// <---------- new route ------------------------------------------------------------------------------------>

// new route -> GET route that renders our page with the form

app.get('/new', (req, res) => {
	const username = req.session.username
	const loggedIn = req.session.loggedIn
	res.render('games/new', { username, loggedIn })
})

// <---------- create routes --------------------------------------------------------------------------------->

// create -> POST route that actually calls the db and makes a new document for add new game page

app.post('/', (req, res) => {
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

// create -> POST route that actually calls the db and makes a new document to add to favorites/game collection

app.post('/newfave', (req, res) => {
	console.log("POST ROUTE HIT")
	// and since we've stored the id of the user in the session object
	// we can use it to set the owner property of the game upon creation.
	req.body.owner = req.session.userId
	console.log("this is what was from the form", req.body)
	Game.create(req.body)
		.then((game) => {
			console.log('this was returned from create', game)
			res.redirect('/games/mine')
		})
		.catch((err) => {
			console.log(err)
			res.json({ err })
		})
})

// <---------- edit route ------------------------------------------------------------------------------------>

// edit route -> GET that takes us to the edit form view

app.get('/:id/edit', (req, res) => {
	// we need to get the id
	const gameId = req.params.id
	// find the game
	Game.findById(gameId)
		// -->render if there is a game
		.then((game) => {
			console.log('edit game', game)
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			res.render('games/edit', { game, username, loggedIn })
		})
		// -->error if no game
		.catch((err) => {
			console.log(err)
			res.json(err)
		})
})

// <---------- update route ---------------------------------------------------------------------------------->

// update route -> sends a put request to our database

app.put('/:id', (req, res) => {
	// get the id
	const gameId = req.params.id
	// tell mongoose to update the game
	Game.findByIdAndUpdate(gameId, req.body, { new: true })
		// if successful -> redirect to the game page
		.then((game) => {
			console.log('the updated game', game)

			res.redirect(`/games/${game.id}`)
		})
		// if an error, display that
		.catch((error) => res.json(error))
})

// <---------- show route ------------------------------------------------------------------------------------>

// show route

app.get('/:id', (req, res) => {
	// first, we need to get the id
	const gameId = req.params.id
	// then we can find a game by its id
	Game.findById(gameId)
	.populate('comments.author')
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

// <---------- delete route ---------------------------------------------------------------------------------->

// delete route

app.delete('/:id', (req, res) => {
	// get the game id
	const gameId = req.params.id
	// delete the game
	Game.findByIdAndRemove(gameId)
		.then((game) => {
			console.log('this is the response from FBID', game)
			res.redirect('/games/mine')
		})
		.catch((error) => {
			console.log(error)
			res.json({ error })
		})
})

/////////////////////////////////////////////////
////////////// EXPORT APP ///////////////////////
/////////////////////////////////////////////////

module.exports = app