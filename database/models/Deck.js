const { Schema, Types } = require('mongoose')

module.exports = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        cards: [{
            type: Schema.Types.ObjectId,
            ref: 'MTGCard'
        }] //should rename 'cards' to something more specific, like MTGCards so I don't get confused
    }, {timestamps: true}
)