import { ADD_CARD_TO_DECK } from './actionTypes'
import { addCardToDeck } from '../utils/api'

export function createCard (title, card) {
    return {
        type: ADD_CARD_TO_DECK,
        title,
        card,
    }
}

export function handleCreateCard(title, card) {
    return (dispatch) => {
        addCardToDeck(title, card).then(data => {
            dispatch(createCard(title, card))
        })
    }
}