// import what I need
const { Schema, model } = require('./connection.js')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// SCHEMA ////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create the schema
const UserSchema = new Schema(
	{
		username: { 
			type: String, 
			required: true, 
			unique: true 
		},
		password: { 
			type: String, 
			required: true 
		}
	},
	{ timestamps: true }
)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// MODEL /////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// creat the model
const User = model('User', UserSchema)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// EXPORT MODEL //////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = User
