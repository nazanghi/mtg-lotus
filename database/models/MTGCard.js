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
        //I know there's more to add here but I'm not sure because I gotta link up my API and see which one is working

    },
    {timestamps: true}
)