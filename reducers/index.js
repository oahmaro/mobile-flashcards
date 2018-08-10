import { GET_DECKS, CREATE_DECK, ADD_CARD_TO_DECK } from '../actions/actionTypes'

export default function reducer (state = {}, action) {
    switch (action.type) {
        case GET_DECKS:
            if(action.decks) {
                return {
                    ...state,
                    ...JSON.parse(action.decks)
                }
            } else return {}
        case CREATE_DECK:
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: []
                }
            }
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                [action.title]: {
                    title : action.title,
                    questions: [...state[action.title].questions, action.card]
                }
            }
        default:
            return state
    }
}
