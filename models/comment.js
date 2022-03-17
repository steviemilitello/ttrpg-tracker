/////////////////////////////////////////////////
////////////// DEPENDENCIES /////////////////////
/////////////////////////////////////////////////

const mongoose = require('./connection')

/////////////////////////////////////////////////
////////////// COMMENT SCHEMA ///////////////////
/////////////////////////////////////////////////

// here's an alternate syntax for creating a schema
// reminder: we do not need a model for a sub document
// all we need is a schema 

const commentSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = commentSchema