//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// DEPENDENCIES //////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mongoose = require('./connection')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////// COMMENT SCHEMA ////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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