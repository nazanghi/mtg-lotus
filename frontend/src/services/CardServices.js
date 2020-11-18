// should look at the card component
import ApiClient from './ApiClient'

export const __GetCards = async (page, limit) => {
    try {
        const response = await ApiClient.get(
            `/mtgcards?page=${page || 1}&${limit || 50 }`
        )
        return response.data
    } catch (error) {throw error}
}

export const __GetSingleCard = async (cardId) => {
    try {
        const response = await ApiClient.get(`/mtgcards/${cardId}`)
        return response.data
    } catch (error) {throw error}
}

export const __AddCardToDeck = async (cardId, deckId) => {
    try {
        const response = await ApiClient.post(`/${deckId}/${cardId}`)
        return response.data
    } catch(error){throw error}
}

export const __RemoveCardFromDeck = async (cardId, deckId) => {
    try {
        const response = await ApiClient.delete(`/${deckId}/${cardId}`)
    } catch(error){throw error}
}