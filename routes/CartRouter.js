const Router = require('express').Router()
const CartController = require('../controllers/CartController')

Router.get('/cart', CartController.DisplayCart)

module.exports = Router