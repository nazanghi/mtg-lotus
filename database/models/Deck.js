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
            type: Types.ObjectId,
            ref: 'cards'
        }]
    }, {timestamps: true}
)