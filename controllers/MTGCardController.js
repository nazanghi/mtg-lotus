const {response } = require('express')
const Card = require('../database/models/Card')
const {Deck, MTGCard, Cart} = require('../database/schema')

const GetCard = async (request, response) => {
    const card = await MTGCard.findById(request.params.cards_id).select('id_name')
    response.send(card)
}

const AddCardToDeck = async (request, response) => {
    const newCard = await MTGCard.findById(request.params.cards_id).select('id_name')
    await Deck.update(
        { _id: request.params.deck_id },
        {
            $push: {
                cards: newCard
            }
        }
    )
    response.send({_id: request.params.deck_id})
}

const AddLooseCard = async (request, response) => {
    const looseCard = await MTGCard.findById(request.params.cards_id).select('id_name')
    await Cart.update(
        { _id: request.params.cards_id },
        {
            $push: {
                items: looseCard
            }
        }
    )
    response.send({_id: request.params.cart_id})
}

const RemoveCard = async (request, response) => {
    await MTGCard.deleteOne({id: request.params.cards_id})
    const updatedDeck = await Deck.findByIdAndUpdate(
        request.params.deck_id,
        { $pull: { cards: {_id: request.params.cards_id } } },
        { upsert: true, new: true}
    )
    response.send(updatedDeck)   
}

module.exports = {
    GetCard,
    AddCardToDeck,
    RemoveCard,
    AddLooseCard
}