const { Schema } = require('mongoose')

module.exports = new Schema (
    {
        title: {
            type: String,
            required: true
        },
        rules_text: {
            type: String,
            required: true
        },
        image_source: {
            type: String,
            required: true
        }
        

    },
    {timestamps: true}
)