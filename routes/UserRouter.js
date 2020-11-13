const { User, Decks, Cart } = require('../database/schema')

const GetProfile = async (request, response) => {
    try {
        const user = await User.findById(request.params.user_id).select('_id name')
    }
}

//still working here
