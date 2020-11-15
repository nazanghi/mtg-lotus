const {response} = require('express')
const YourCart = require('../database/models/Cart')
const {Deck, MTGCard, User, Cart} = require('../database/schema')

const DisplayCart = async (request, response) => {
    const ShoppingCart = await Cart.findById(request.params.cart_id).select('id_name')
    response.send(ShoppingCart)
}


module.exports = {
    DisplayCart,

}

// need to add more functions for this one 