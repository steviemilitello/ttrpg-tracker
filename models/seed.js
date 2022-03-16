/////////////////////////////////////////////////
////////////// DEPENDENCIES /////////////////////
/////////////////////////////////////////////////

const mongoose = require('./connection')
const Game = require('./games')
const middleware = require('./utils/middleware')

app.use(express.static('public'))
app.use(express.static('media'))

/////////////////////////////////////////////////
////////////// SEED CODE ////////////////////////
/////////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection

db.on('open', () => {
	// array of starter games
	const startGames = [
        { name: "Coyote & Crow",
        description: "Coyote and Crow is a tabletop role playing game set in an alternate future of the Americas where colonization never occurred. Instead, advanced civilizations arose over hundreds of years after a massive climate disaster changed the history of the planet. You'll play as adventurers starting out in the city of Cahokia, a bustling, diverse metropolis along the Mississippi River. It's a world of science and spirituality where the future of technology and legends of the past will collide.",
        img: "../../media/coyoteandcrow.jpeg",
        system: "Coyote & Crow",
        genres: ["Sci-Fi"],
        creators: ["Connor Alexander"],
        publisher: "Coyote & Crow",
        types: "GM",
        players: 4,
        },
        { name: "Strixhaven: A Cirriculum of Chaos",
        description: "Strixhaven: A Curriculum of Chaos introduces the fantastical setting of Strixhaven University, drawn from the multiverse of Magic: The Gathering, and provides rules for creating characters who are students in one of its five colleges. Characters can explore the setting over the course of four adventures, which can be played together or on their own. Each adventure describes an academic year filled with scholarly pursuits, campus shenanigans, exciting friendships, hidden dangers, and perhaps even romance.",
        img: "../../media/strixhaven.png",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Wizards of the Coast"],
        publisher: "Wizards of the Coast",
        types: ["GM", "Module"],
        players: 4,
        },
		{ name: "Zweihander Revised Core Rulebook",
        description: "Using the Powered By Zweihander d100 game engine, you will create grim characters, write perilous adventures, and build your own low fantasy & dark fantasy campaigns. These rules are a perfect fit for Renaissance and medieval-styled adventures, too. You can also use this book to create your own home-brewed worlds, whether inspired by the works of Andrzej Sapkowski’s  The Witcher, George R.R. Martin’s Game of Thrones, Glen Cook’s Black Company, Myke Cole’s The Armored Saint, Robert E. Howard’s Solomon Kane, Scott Lynch’s Gentlemen Bastard series, or other grimdark-inspired media.",
        img: "../../media/zweihander.jpeg",
        system: "Powered by Zweihander",
        genres: ["Fantasy, Dark Fantasy"],
        creators: ["Daniel D. Fox"],
        publisher: "Grim & Perilous",
        types: "GM",
        players: 4,
        },
	]

	// when we seed data, there are a few steps involved
	// delete all the data that already exists(will only happen if data exists)
	Game.remove({})
        .then(deletedGames => {
		    console.log('this is what remove returns', deletedGames)
		    // then we create with our seed data
            Game.create(startGames)
                .then((game) => {
                    console.log('Here are the new seed game', game)
                    db.close()
                })
                .catch(error => {
                    console.log(error)
                    db.close()
                })
	    })
        .catch(error => {
            console.log(error)
            db.close()
        })
	// then we can send if we want to see that data
})