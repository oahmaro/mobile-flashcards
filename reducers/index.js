import { GET_DECKS, CREATE_DECK, ADD_CARD_TO_DECK } from '../actions/actionTypes'

function decksStorage (state = {}, action) {
    switch (action.type) {
        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case CREATE_DECK:
            return {
                ...state,
                [action.title]: {
                    action.title,
                    questions: []
                }
            }
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                [action.title]: {
                    action.title,
                    questions: [...state[action.title].questions, action.card]
                }
            }
        default:
            return state
    }
}

export default decksStorage