const { model } = require('mongoose')
const UserModel = require('./models/User')
const CartModel = require('./models/Cart')
const DeckModel = require('./models/Deck')
const MTGCardModel = require('./models/MTGCard')

const User = model('User', UserModel)
const Cart = model('Cart', CartModel)
const Deck = model('Deck', DeckModel)
const MTGCard = model('MTGCard', MTGCardModel)

module.exports = { User, Cart, Deck, MTGCard}