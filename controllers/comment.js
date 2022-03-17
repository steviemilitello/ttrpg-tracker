/////////////////////////////////////////////////
////////////// DEPENDENCIES /////////////////////
/////////////////////////////////////////////////

const express = require('express')
const mongoose = require('mongoose')

// we need our game MODEL because comments are ONLY a schema 
// so we'll run queries on games and add in comments
const Game = require('../models/games')

/////////////////////////////////////////////////
////////////// APP ///////////////////////////
/////////////////////////////////////////////////

const app = require("liquid-express-views")(express())

/////////////////////////////////////////////////
////////////// ROUTES ///////////////////////////
/////////////////////////////////////////////////

// only need two routes for comments right now 

// POST -> to create a comment
app.post('/:gameId', (req, res) => {
    const gameId = req.params.gameId
    console.log('first comment body', req.body)
    
    // we'll adjust req.body to include an author
    // the author's id will be the logged in user's id
    req.body.author = req.session.userId
    console.log('updated comment body', req.body)
    // we'll find the game with the gameId
   Game.findById(gameId)
        .then(game => {
            // then we'll send req.body to the comments array
            game.comments.push(req.body)
            // save the game
            return game.save()
        })
        .then(game => {
            // redirect
            res.redirect(`/games/${game.id}`)
        })
        // or show an error if we have one
        .catch(error => {
            console.log(error)
            res.send(error)
        })
})

// DESTROY -> to destroy a comment
// we'll use two params to make our life easier
// first the id of the game, since we need to find it 
// then the id of the comment, since we want to delete it
app.delete('/delete/:gameId/:commId', (req, res) => {
    // first we want to parse out our ids
    const gameId = req.params.gameId
    const commId = req.params.commId
    // then we'll find the game
    Game.findById(gameId)
        .then(game => {
            const theComment = game.comments.id(commId)
            // only delete the comment if the user who is logged in is the comment's author
            if ( theComment.author == req.session.userId) {
                // then we'll delete the comment
                theComment.remove()
                // return the saved game
                return game.save()
            } else {
                return
            }

        })
        .then(game => {
            // redirect to the game show page
            res.redirect(`/games/${gameId}`)
        })
        .catch(error => {
            // catch any errors
            console.log(error)
            res.send(error)
        })
})

/////////////////////////////////////////////////
////////////// EXPORT APP ///////////////////////
/////////////////////////////////////////////////

module.exports = app