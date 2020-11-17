import ApiClient from './ApiClient'

export const __GetDecks = async (page, limit) => {
    try {
        const response= await ApiClient.get(
            `/decks?page=${page ||1}&limit=${limit || 10 }`
        )
        return response.data
    } catch (error) {throw error}
}

export const __GetSingleDeck = async (deckId) => {
    try {
        const response = await ApiClient.get(`/decks/${deckId}`)
    } catch (error) {throw error}
}

export const __DeleteDeck = async (deckId) => {
    try {
        const response = await ApiClient.delete(`/decks/${deckId}?active=true`)
    } catch (error) {throw error}
}

export const __UpdateDeckInfo = async (formData, deckId) => {
    try {
        const response = await ApiClient.put(`/decks/${deckId}?active=true`, formData)
        console.log(response.data)
        return response.data
    } catch (error){throw error}
}

export const __CreateDeck = async (formData, userId) => {
    try {
        const response = await ApiClient.post(`/decks/${userId}/?active=true`, formData)
        return response.data
    } catch (error){throw error}
}