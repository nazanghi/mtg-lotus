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

//Still working on this one here