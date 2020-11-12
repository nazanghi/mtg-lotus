const express = require('express')
const {Deck, MTGCard} = require('../database/schema')

const GetAllDecks = async (request, response) => {
    const {page, limit } = request.query
    const offset = page ==='1' ? 0 : Math.floor(parseInt(page) *parseInt(limit))
    .limit(parseInt(limit))
    .skip(offset)
    const displayDecks = await Decks.find()
    response.send({results: displayDecks.length, decks})
}

const GetDeck = async (request, response) => {
    const deck = await Deck.findById(request.params.deck_id).select('id_name')
    response.send(deck)
    }


const CreateDeck = async(request, response) => {
    const body = request.body
    const deck = new Deck({
        name: body.name,
        description: body.description,
        cards: []
    })
    deck.save()
    response.send(deck)
}

const RenameDeck = async (request, response) => {
    await Decks.findByIdAndUpdate(
        request.params.deck_id,
        {
            ...request.body
        },
        {new: true, useFindAndModify: false}, //not sure what this part means
        (error, (title)=> (error ? error : response.send(title))
        )
    )
}

const ChangeDescription = async (request, response) => {
    await Decks.findByIdAndUpdate(
        request.params.deck_id,
        {
            ...request.body
        },
        {new: true, useFindAndModify: false},
        (error, (description)=> (error ? error : response.send(description)))
    )
}

const DeleteDeck = async (request, response) => {
    await Card.deleteMany({ _id: {$in: deck.cards}})
    await Deck.findByIdAndDelete(request.params.deck_id)
    response.send({message: `Deck Deleted`})
}

module.exports ={
    GetDeck,
    CreateDeck,
    RenameDeck,
    ChangeDescription,
    DeleteDeck,
    GetAllDecks
}