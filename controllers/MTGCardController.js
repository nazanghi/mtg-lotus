const express = require('express')
const Card = require('../database/models/Card')
const {Decks, Card } = require('../database/schema')

const GetCard = async (request, response) => {
    const card = await Card.findById(request.params.cards_id).select('id_name')
    response.send(card)
}

const AddCard = async (request, response) => {
    const newCard = await Card.findById(request.params.cards_id).select('id_name')
    await Decks.update(
        { _id: request.params.decks_id },
        {
            $push: {
                cards: newCard
            }
        }
    )
    response.send({_id: request.params.deck_id})
}

const RemoveCard = async (request, response) => {
    await Card.deleteOne({id: request.params.cards_id})
    const updatedDeck = await Decks.findByIdAndUpdate(
        request.params.deck_id,
        { $pull: { cards: {_id: request.params.cards_id } } },
        { upsert: true, new: true}
    )
    response.send(updatedDeck)   
}

module.exports = {
    GetCard,
    AddCard,
    RemoveCard
}