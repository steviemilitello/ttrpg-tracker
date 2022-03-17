/////////////////////////////////////////////////
////////////// DEPENDENCIES /////////////////////
/////////////////////////////////////////////////

const mongoose = require('./connection')
const Game = require('./games')

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
        img: "https://i.imgur.com/sFNXDyT.jpg",
        system: "Coyote & Crow",
        genres: ["Sci-Fi"],
        creators: ["Connor Alexander"],
        publisher: "Coyote & Crow",
        types: "GM",
        players: 4,
        },
        { name: "Ironsworn",
        description: "In the Ironsworn tabletop roleplaying game, you are a hero sworn to undertake perilous quests in the dark fantasy setting of the Ironlands. You will explore untracked wilds, fight desperate battles, forge bonds with isolated communities, and reveal the secrets of this harsh land. Are you ready to swear iron vows and see them fulfilled—no matter the cost?",
        img: "https://i.imgur.com/2VanP0y.png",
        system: "Forged in Iron",
        genres: ["Sci-Fi"],
        creators: ["Shawn Tomkin"],
        publisher: "Shawn Tomkin",
        types: ["GM", "GM-less", "Solo"],
        players: 1,
        },
        { name: "Ironsworn: Delve",
        description: "This supplement for the Ironsworn tabletop roleplaying game takes your quests to the deepest, darkest reaches of the Ironlands. Plunge into subterranean caverns. Explore untracked forests and foreboding swamps. Journey across icebound wastes. Uncover lost secrets within ancient ruins. To fulfill your sworn vows, you will brave the most dangerous places of the world and face the most terrible foes. Will you escape the depths? Play to find out.",
        img: "https://i.imgur.com/YS0kHVp.png",
        system: "Forged in Iron",
        genres: ["Sci-Fi"],
        creators: ["Shawn Tomkin"],
        publisher: "Shawn Tomkin",
        types: ["GM", "GM-less", "Solo", "Supplement"],
        players: 1,
        },
        { name: "Ironsworn: Starforged",
        description: "In Ironsworn: Starforged you are a spaceborne hero sworn to undertake perilous quests. You will explore uncharted space, unravel the secrets of a mysterious galaxy, and build bonds with those you meet on your travels. Most importantly, you will swear iron vows and see them fulfilled—no matter the cost.",
        img: "https://i.imgur.com/6v2sjBe.png",
        system: "Forged in Iron",
        genres: ["Sci-Fi"],
        creators: ["Shawn Tomkin"],
        publisher: "Absolute Tabletop",
        types: ["GM", "GM-less", "Solo"],
        players: 1,
        },
        { name: "Strixhaven: A Cirriculum of Chaos",
        description: "Strixhaven: A Curriculum of Chaos introduces the fantastical setting of Strixhaven University, drawn from the multiverse of Magic: The Gathering, and provides rules for creating characters who are students in one of its five colleges. Characters can explore the setting over the course of four adventures, which can be played together or on their own. Each adventure describes an academic year filled with scholarly pursuits, campus shenanigans, exciting friendships, hidden dangers, and perhaps even romance.",
        img: "https://i.imgur.com/pr7Y6IH.png",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Wizards of the Coast"],
        publisher: "Wizards of the Coast",
        types: ["GM", "Module"],
        players: 4,
        },
		{ name: "Zweihander Revised Core Rulebook",
        description: "Using the Powered By Zweihander d100 game engine, you will create grim characters, write perilous adventures, and build your own low fantasy & dark fantasy campaigns. These rules are a perfect fit for Renaissance and medieval-styled adventures, too. You can also use this book to create your own home-brewed worlds, whether inspired by the works of Andrzej Sapkowski’s  The Witcher, George R.R. Martin’s Game of Thrones, Glen Cook’s Black Company, Myke Cole’s The Armored Saint, Robert E. Howard’s Solomon Kane, Scott Lynch’s Gentlemen Bastard series, or other grimdark-inspired media.",
        img: "https://i.imgur.com/G4j0VNU.jpg",
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