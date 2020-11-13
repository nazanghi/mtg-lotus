const { model } = require('mongoose')
const UserModel = require('./models/User')
const CartModel = require('./models/Cart')
const DeckModel = require('./models/Deck')
const MTGCardModel = require('./models/MTGCard')

const User = model('users', UserModel)
const Cart = model('Cart', CartModel)
const Deck = model('deck', DeckModel)
const MTGCard = model('MTGCard', MTGCardModel)

module.exports = { User, Cart, Deck, MTGCard}