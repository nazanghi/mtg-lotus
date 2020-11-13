const Router = require('express').Router()
const MTGCardController = require('../controllers/MTGCardController')

Router.get('/cards_id', MTGCardController.GetCard)
Router.put('/:deck_id/cards_id', MTGCardController.AddCard)
Router.delete('/:deck_id/cards_id', MTGCardController.RemoveCard)