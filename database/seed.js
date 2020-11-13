// I'm not sure yet if I need a seed, so I'm skipping it for now

// This may be a place where I put all my API shit though

// const SCRYFALL = `https://api.scryfall.com`
// const TCGKEY = `8f418e8e-ea65-4e0c-871d-79fc4c0c93e1`
//commented out so I can just test things out


const faker = require('faker')
const connection = require('./connection')
const { Types } =require('mongoose')
const { Card } = require('./schema')

const cards= new Array(500).fill().map(() => ({
    _id: Types.ObjectId(),
    name: faker.random.words(Math.floor(Math.random()*5)),
    description: faker.random.words(Math.floor(Math.random()*15))
}))

const seed = async () => {
    await connection.connect
    await Card.insertMany(cards)
    await connection.disconnect 
    process.exit()
}

seed()