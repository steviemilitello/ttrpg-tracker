// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./games')

// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const gamesSchema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
        img: String, 
        system: { type: String, required: true },
        genres: [ String ],
        creators: [ String ],
        publisher: { type: String, required: true },
		types: [ String ],
        players: { type: Number, required: true },
		owner: {
			type: Schema.Types.ObjectID,
			ref: 'User',
		}
	},
	{ timestamps: true }
)

const Game = model('Game', gamesSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////

module.exports = Game