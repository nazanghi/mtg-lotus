const { Schema, SchemaTypes } = require('mongoose')

module.exports = new Schema (
    {
        items: [
        // I think I'd need to do a type: Schema.Types.ObjectId here
        //and I don't know if I need to make one for decks and one for mtgcards
        ],
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
        
    },
    {timestamps: true}
)