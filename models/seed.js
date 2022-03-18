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
        {
        name: "Coyote & Crow",
        description: "Coyote and Crow is a tabletop role playing game set in an alternate future of the Americas where colonization never occurred. Instead, advanced civilizations arose over hundreds of years after a massive climate disaster changed the history of the planet. You'll play as adventurers starting out in the city of Cahokia, a bustling, diverse metropolis along the Mississippi River. It's a world of science and spirituality where the future of technology and legends of the past will collide.",
        img: "https://i.imgur.com/MGDT42p.png",
        system: "Coyote & Crow",
        genres: ["Sci-Fi"],
        creators: ["Connor Alexander"],
        publishers: ["Coyote & Crow"],
        gametypes: ["GM"],
        booktypes: ["Core Rule Book"],
        players: 4,
        },
        {
        name: "Player's Handbook",
        description: "The Player’s Handbook is the essential core reference for every Dungeons & Dragons roleplayer. This sourcebook provides you the tools and tips to help create your characters, equip them, and send them out into the world.",
        img: "https://i.imgur.com/BOiSTT0.jpg",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Wizards of the Coast"],
        publishers: ["Wizards of the Coast"],
        gametypes: ["GM",],
        booktypes: ["Core Rule Book"],
        players: 4,
        },
        {
        name: "Dungeon Master's Guide",
        description: "The Dungeon Master’s Guide provides the inspiration and guidance you need to spark your imagination and create worlds of adventure for your players to explore and enjoy. This core D&D book gives Dungeon Masters the world building advice, tips, tricks, and tools to create your own dungeons and adventures.",
        img: "https://i.imgur.com/X9jOdWs.jpg",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Wizards of the Coast"],
        publishers: ["Wizards of the Coast"],
        gametypes: ["GM",],
        booktypes: ["Core Rule Book"],
        players: 4,
        },
        {
        name: "Monster Manual",
        description: "The A to Z Fantasy Bestiary. The Monster Manual adds a horde of classic Dungeons & Dragons creatures, including dragons, giants, mind flayers, and beholders - to fill your campaign and challenge your players.",
        img: "https://i.imgur.com/7bv88K3.jpg",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Wizards of the Coast"],
        publishers: ["Wizards of the Coast"],
        gametypes: ["GM",],
        booktypes: ["Core Rule Book"],
        players: 4,
        },
        {
        name: "Guildmaster's Guide to Ravnica",
        description: " perpetual haze of dreary rain hangs over the spires of Ravnica. Bundled against the weather, the cosmopolitan citizens in all their fantastic diversity go about their daily business in bustling markets and shadowy back alleys. Through it all, ten guilds—crime syndicates, scientific institutions, church hierarchies, military forces, judicial courts, buzzing swarms, and rampaging gangs—vie for power, wealth, and influence. These guilds are the foundation of power on Ravnica. They have existed for millennia, and each one has its own identity and civic function, its own diverse collection of races and creatures, and its own distinct subculture. Their history is a web of wars, intrigue, and political machinations as they have vied for control of the plane.",
        img: "https://i.imgur.com/klsCFju.png",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Wizards of the Coast"],
        publishers: ["Wizards of the Coast"],
        gametypes: ["GM",],
        booktypes: ["Setting Guide"],
        players: 4,
        },
        {
        name: "Explorer's Guide to Wildemount",
        description: "Explore the war-torn continent of Wildemount in this sourcebook from the second season of the hit series Critical Role. As war brews between the Dwendalian Empire and the Kryn Dynasty, somewhere in the far corners of this landscape are secrets that could end this conflict and usher in a new age of peace—or burn the world to a cinder.",
        img: "https://i.imgur.com/iAhEvoK.png",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Critical Role, Wizards of the Coast"],
        publishers: ["Critical Role, Wizards of the Coast"],
        gametypes: ["GM",],
        booktypes: ["Setting Guide"],
        players: 4,
        },
        {
        name: "Icewind Dale: Rime of the Frostmaiden",
        description: "Beneath the unyielding night sky, you stand before a towering glacier and recite an ancient rhyme, causing a crack to form in the great wall of ice. Beyond this yawning fissure, the Caves of Hunger await. What fantastic secrets and treasures are entombed in the sunless heart of the glacier, and what will their discovery mean for the denizens of Icewind Dale?",
        img: "https://i.imgur.com/Om0Mfmk.png",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Wizards of the Coast"],
        publishers: ["Wizards of the Coast"],
        gametypes: ["GM",],
        booktypes: ["Module"],
        players: 4,
        },
        {
        name: "Van Richten’s Guide to Ravenloft",
        description: "Terror stalks the nightmare realms of Ravenloft. No one knows this better than monster scholar Rudolph Van Richten. To arm a new generation against the creatures of the night, Van Richten--along with other heroes of Ravenloft like Ezmerelda d’Avenir and the Weathermay-Foxgrove Twins--shares his correspondence and case files in this tome of eerie tales and chilling truths about the Lands of the Mists.",
        img: "https://i.imgur.com/CFXcpdP.jpg",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Wizards of the Coast"],
        publishers: ["Wizards of the Coast"],
        gametypes: ["GM",],
        booktypes: ["Setting Guide"],
        players: 4,
        },
        {
        name: "Strixhaven: A Cirriculum of Chaos",
        description: "Strixhaven: A Curriculum of Chaos introduces the fantastical setting of Strixhaven University, drawn from the multiverse of Magic: The Gathering, and provides rules for creating characters who are students in one of its five colleges. Characters can explore the setting over the course of four adventures, which can be played together or on their own. Each adventure describes an academic year filled with scholarly pursuits, campus shenanigans, exciting friendships, hidden dangers, and perhaps even romance.",
        img: "https://i.imgur.com/pr7Y6IH.png",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Wizards of the Coast"],
        publishers: ["Wizards of the Coast"],
        gametypes: ["GM",],
        booktypes: ["Module", "Setting Guide"],
        players: 4,
        },
        {
        name: "Tal'dorei Campaign Setting Reborn",
        description: "Tal’Dorei Campaign Setting Reborn is the definitive sourcebook for bringing the locations, people, creatures, and character options of Critical Role's Tal’Dorei continent to roleplaying games everywhere. Set two decades after the conclusion of Critical Role Campaign 1, this book invites you to soar on a skyship from the metropolis of Emon to the distant haven of Whitestone, venture into wilderness rife with terrifying monsters and wayward mages, and uncover magic items that range from simple trinkets to the legendary Vestiges of Divergence. Explore dazzling new subclasses and backgrounds in your epic adventures in the world of Exandria and beyond! Tal’Dorei Campaign Setting Reborn holds a wealth of playable content, lore, and artwork to inspire. The adventure begins here!",
        img: "https://i.imgur.com/kAAeS3k.png",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Critical Role", "Darrington Press"],
        publishers: ["Critical Role", "Darrington Press"],
        gametypes: ["GM"],
        booktypes: ["Setting Guide"],
        players: 4,
        },
        {
        name: "Critical Role: Call of the Netherdeep",
        description: "In Critical Role: Call of the Netherdeep, you’ll embark on an epic campaign taking players from levels 3-12 as they swirl through strange underwater locales, mysterious ruins, and an intrigue-filled city! Under the ill-fated red moon of Ruidius, you’ll unravel truths of the greatest legends of Critical Role’s world of Exandria. This uniquely-structured adventure module pairs you alongside rival adventurers, who grow in capability alongside you. In the oasis city of Ank’Harel, secretive and powerful factions invite you into the deeper secrets of the city, and beyond. What choices will you make with the dark and tormenting knowledge you’ll find in the mind-bending aquatic abyss of the Netherdeep?",
        img: "https://i.imgur.com/9T6oN9e.png",
        system: "Dungeons & Dragons 5th Edition",
        genres: ["Fantasy"],
        creators: ["Critical Role", "Wizards of the Coast"],
        publishers: ["Critical Role", "Wizards of the Coast"],
        gametypes: ["GM"],
        booktypes: ["Module"],
        players: 4,
        },
        {
        name: "Blades in the Dark",
        description: "Blades in the Dark is a tabletop role-playing game about a crew of daring scoundrels seeking their fortunes on the haunted streets of an industrial-fantasy city. There are heists, chases, occult mysteries, dangerous bargains, bloody skirmishes, and, above all, riches to be had — if you’re bold enough to seize them. You and your fledgling crew must thrive amidst the threats of rival gangs, powerful noble families, vengeful ghosts, the Bluecoats of the city watch, and the siren song of your scoundrel’s own vices. Will you rise to power in the criminal underworld? What are you willing to do to get to the top?",
        img: "https://i.imgur.com/76WJRS6.png",
        system: "Forged in the Dark",
        genres: ["Fantasy, Steampunk, Heist"],
        creators: ["John Harper"],
        publishers: ["Evil Hat Productions, One Seven Design"],
        gametypes: ["GM"],
        booktypes: ["Core Rule Book"],
        players: 4,
        },
        {
        name: "Ironsworn",
        description: "In the Ironsworn tabletop roleplaying game, you are a hero sworn to undertake perilous quests in the dark fantasy setting of the Ironlands. You will explore untracked wilds, fight desperate battles, forge bonds with isolated communities, and reveal the secrets of this harsh land. Are you ready to swear iron vows and see them fulfilled—no matter the cost?",
        img: "https://i.imgur.com/2VanP0y.png",
        system: "Forged in Iron",
        genres: ["Dark Fantasy, Fantasy"],
        creators: ["Shawn Tomkin"],
        publishers: ["Shawn Tomkin"],
        gametypes: ["GM", "GM-less", "Solo"],
        booktypes: ["Core Rule Book"],
        players: 1,
        },
        {
        name: "Ironsworn: Delve",
        description: "This supplement for the Ironsworn tabletop roleplaying game takes your quests to the deepest, darkest reaches of the Ironlands. Plunge into subterranean caverns. Explore untracked forests and foreboding swamps. Journey across icebound wastes. Uncover lost secrets within ancient ruins. To fulfill your sworn vows, you will brave the most dangerous places of the world and face the most terrible foes. Will you escape the depths? Play to find out.",
        img: "https://i.imgur.com/YS0kHVp.png",
        system: "Forged in Iron",
        genres: ["Dark Fantasy, Fantasy"],
        creators: ["Shawn Tomkin"],
        publishers: ["Shawn Tomkin"],
        gametypes: ["GM", "GM-less", "Solo"],
        booktypes: ["Supplement"],
        players: 1,
        },
        {
        name: "Ironsworn: Lodestar",
        description: "Ironsworn Lodestar is your quick reference guide for the Ironsworn tabletop roleplaying game. It includes the essential rules, moves, and oracles. It's everything you need to keep your story moving.",
        img: "https://i.imgur.com/TSp3gaC.png",
        system: "Forged in Iron",
        genres: ["Dark Fantasy, Fantasy"],
        creators: ["Shawn Tomkin"],
        publishers: ["Shawn Tomkin"],
        gametypes: ["GM", "GM-less", "Solo"],
        booktypes: ["Supplement"],
        players: 1,
        },
        {
        name: "Ironsworn: Starforged",
        description: "In Ironsworn: Starforged you are a spaceborne hero sworn to undertake perilous quests. You will explore uncharted space, unravel the secrets of a mysterious galaxy, and build bonds with those you meet on your travels. Most importantly, you will swear iron vows and see them fulfilled—no matter the cost.",
        img: "https://i.imgur.com/6v2sjBe.png",
        system: "Forged in Iron",
        genres: ["Sci-Fi"],
        creators: ["Shawn Tomkin"],
        publishers: ["Absolute Tabletop", "Shawn Tomkin"],
        gametypes: ["GM", "GM-less", "Solo"],
        booktypes: ["Core Rule Book"],
        players: 1,
        },
        { 
        name: "Worlds Without Number",
        description: "Worlds Without Number is a fantasy role-playing game, one fully compatible with the hit sci-fi game Stars Without Number. It's built from the ground up to provide gritty, hard-edged adventure in the fathomless future of the Latter Earth, a fantastic realm of time-lost sorcery, savage foes, and barbaric splendor. The cold steel in the fists of your heroes and the half-understood sorcery in their tomes must suffice to overcome the monstrous remnants of ancient alien rulers and the present depredations of ruthless lords and hideous beasts alike. The riches of lost ages await in the subterranean Deeps that once held their kingdoms, and even the heavens above are not beyond the reach of the recklessly daring.",
        img: "https://i.imgur.com/08E6zoo.png",
        system: "Old School Renaissance",
        genres: ["Fantasy"],
        creators: ["Kevin Crawford"],
        publishers: ["Sine Nomine Publishing"],
        gametypes: ["GM"],
        booktypes: ["Core Rule Book"],
        players: 4,
        },
        { 
        name: "Monster of the Week",
        description: "Most people don’t believe in monsters, but you know the truth. They’re real, and it’s your task to bring them down. This revised edition of Monster of the Week brings that adventure to life. Monster of the Week is a standalone action-horror RPG for 3-5 people. Hunt high school beasties a la Buffy the Vampire Slayer, travel the country to bring down unnatural creatures like the Winchester brothers of Supernatural, or head up the government investigation like Mulder and Scully.",
        img: "https://i.imgur.com/TAJkQWw.png",
        system: "Powered by the Apocalypse",
        genres: ["Urban Fantasy"],
        creators: ["Michael Sands"],
        publishers: ["Evil Hat Productions"],
        gametypes: ["GM"],
        booktypes: ["Core Rule Book"],
        players: 3,
        },
        {
        name: "Monster of the Week: Tome of Mysteries",
        description: "Open the Tome—if you dare! In the Monster of the Week roleplaying game, hunters must solve all manner of mysteries before they can save the day. The Tome of Mysteries expands their options—and magnifies their peril-—with a wide variety of GMing advice, essays, rules, and mysteries from the Monster of the Week “Roadhouse Regulars” online community.",
        img: "https://i.imgur.com/61WZSou.png",
        system: "Powered by the Apocalypse",
        genres: ["Urban Fantasy"],
        creators: ["Matthew Aaron", "Aaron Burkett", "Kane Cathain", "Sean Clancy", "Jason D’Angelo", "Bruno Dias", "Felix Girke", "Marek Golonka", "Luke Green", "Bryanna Hitchcock", "Sophie Lagacé", "Zed Lopez", "Paul McBride", "Arturo Martinez", "Jamie Sands", "Michael Sands", "Daniel Steadman", "Jacob Steele", "Chris Stone-Bush", "Chloe Sutherland", "Mark Tygart", "Michał Werde"],
        publishers: ["Evil Hat Productions"],
        gametypes: ["GM"],
        booktypes: ["Supplement"],
        players: 2,
        },
        {
        name: "Thirsty Sword Lesbians",
        description: "A sword duel can end in kissing, a witch can gain her power by helping others find love, and an entire campaign can be built around wandering  matchmakers flying from system to system. Thirsty Sword Lesbians is a roleplaying game for telling queer stories with friends. If you love angsty disaster lesbians with swords, you have come to the right place.",
        img: "https://i.imgur.com/fe7z5SY.png",
        system: "Powered by the Apocalypse",
        genres: ["Cyberpunk", "Fantasy", "Genre-Agnostic", "Sci-Fi", "Steampunk"],
        creators: ["April Kit Walsh"],
        publishers: ["Evil Hat Productions", "Gay Spaceship Games"],
        gametypes: ["GM"],
        booktypes: ["Core Rule Book"],
        players: 3,
        },
        {
        name: "Necronautilis",
        description: "players act as souls bound to clouds of noxious gas called Death Agents,  exploring a universe outside of time consisting of planets full of  creatures who ended up there when they died. While using their Words of  Power to act on behalf of the blind god Death and maintain order in a  post-death galaxy, they’ll see their powers grow and splinter while  exploring the corporeal life they left behind. This game is simultaneously a stoner-metal science fantasy and an exploration of the subjectivity of language, ethics, memory, and reality. It is designed for single-sessions of play or ongoing series of missions across a variety of planets.",
        img: "https://i.imgur.com/TizPO33.png",
        system: "Stellar Remnants",
        genres: ["Sci-Fi", "Science Fantasy"],
        creators: ["Adam Vass"],
        publishers: ["World Champ Game Co."],
        gametypes: ["GM"],
        booktypes: ["Core Rule Book"],
        players: 2,
        },
		{
        name: "Zweihander Revised Core Rulebook",
        description: "Using the Powered By Zweihander d100 game engine, you will create grim characters, write perilous adventures, and build your own low fantasy & dark fantasy campaigns. These rules are a perfect fit for Renaissance and medieval-styled adventures, too. You can also use this book to create your own home-brewed worlds, whether inspired by the works of Andrzej Sapkowski’s  The Witcher, George R.R. Martin’s Game of Thrones, Glen Cook’s Black Company, Myke Cole’s The Armored Saint, Robert E. Howard’s Solomon Kane, Scott Lynch’s Gentlemen Bastard series, or other grimdark-inspired media.",
        img: "https://i.imgur.com/G4j0VNU.jpg",
        system: "Powered by Zweihander",
        genres: ["Fantasy, Dark Fantasy"],
        creators: ["Daniel D. Fox"],
        publishers: ["Andrew McMeel Publishing", "Grim & Perilous"],
        gametypes: ["GM"],
        booktypes: ["Core Rule Book"],
        players: 4,
        },
        {
        name: "Main Gauche",
        description: "MAIN GAUCHE is a supplement for the Ennie award-winning Best Game & Product of the Year Zweihander – a gritty, dark fantasy tabletop role-playing game.",
        img: "https://i.imgur.com/IPs9wI8.png",
        system: "Powered by Zweihander",
        genres: ["Fantasy, Dark Fantasy"],
        creators: ["Daniel D. Fox"],
        publishers: ["Andrew McMeel Publishing", "Grim & Perilous"],
        gametypes: ["GM"],
        booktypes: ["Supplement"],
        players: 4,
        },
        {
        name: "Dark Astral",
        description: "It is the far future, but one seen through the eyes of the Renaissance and intermingled with the New Testament. Following the desecration of the garden world Eden, humanity fled in a diaspora to the heavens. An ark bore them into the Vault of Night, powered by prayers to the god-head Sol Invictus. A new Jerusalem was erected among the stars; a pinnacle of humanity's greatness. As time progressed, the memory of Eden was lost to a new dawn, regarded only as a faint echo in convocations to Sol Invictus. But then came The Other - and with it - the destruction of New Jerusalem. Left with no other choice, humanity returned to Eden... but it was not the world they remembered.",
        img: "https://i.imgur.com/lpgD2Xp.png",
        system: "Powered by Zweihander",
        genres: ["Sci-Fi"],
        creators: ["Daniel D. Fox"],
        publishers: ["Andrew McMeel Publishing", "Grim & Perilous"],
        gametypes: ["GM"],
        booktypes: ["Supplement"],
        players: 4,
        },
        {
        name: "Flames of Freedom",
        description: "A tangled web of conspiracy spans North America. In the war for survival, it does not matter what your creed, color, culture, or gender is - all stand together. But as the Revolution has begun, something far more mysterious stirs. Agents of the occult entreat both the Continental Army and Red Coats. Freemasons conspire in the City of Brotherly Love. Maryland is in the throes of a witch hunt by the Knights Templar. Reports of witches have been seen in the Great Dismal Swamp. Indigenous sachem say that devils walk among the living. Flesh-gobbling ghouls have been tunneling beneath Boston. The Pine Barrens of New Jersey is haunted by what the locals call the Leeds Devil. In this game, most people have either chosen to deny the supernatural or rationalize it away. A rare few accept it for what it is and act. You are among those heroes, and are destined for greatness . . . or death.",
        img: "https://i.imgur.com/oSm8Aa6.png",
        system: "Powered by Zweihander",
        genres: ["Alternate History"],
        creators: ["Daniel D. Fox"],
        publishers: ["Andrew McMeel Publishing", "Grim & Perilous"],
        gametypes: ["GM"],
        booktypes: ["Supplement"],
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