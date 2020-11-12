const { Schema } = require('mongoose')

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
        cards: { 
            type: Array,
            required: true
        }
    }, {timestamps: true}
)