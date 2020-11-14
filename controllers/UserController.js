const { User, Cart } = require('../database/schema')

const GetProfile = async(request, response) => {
    try {
        const user = await User.findById(request.params.user_id)
        const cart = await Cart.find({ user_id: request.params.user_id })
        response.send ({ user, cart})
    } catch (error) {
        throw error
    }
}

const CreateUser = async (request, response) => {
    try {
        const body = request.body
        const password_digest = await generatePassword(body.password)
        const User = new User ({
            name: body.name,
            email: body.email,
            password_digest
        })
        user.save()
        response.send(user)
    } catch (error) {
        throw error
    }
}

const SignInUser = async (request, response, next) => {
    try {
        const user = await User.findOne({email: request.body.email})

        if (user &&
            (await checkPassword(request.body.password, user.password_digest))
        ) {
            const payload = {
                _id: user._id,
                name: user.name
            }
            response.locals.payload = payload //kind of unclear here
            return next()
        }
        response.status(401).send({ message: `Wrong Password, try again.`})
    } catch (error) {
        throw error
    }
}

const RefreshSession = (request, response) => {
    try {
        const token = response.locals.token
        response.send ({ user: jwt.decode(token), token: response.locals.token})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetProfile,
    CreateUser,
    SignInUser,
    RefreshSession
}