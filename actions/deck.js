import { GET_DECKS } from './actionTypes'
import { CREATE_DECK } from './actionTypes'
import { getDecks, saveDeckTitle } from '../utils/api'
import { setDummyData } from '../utils/helpers';

export function receiveDecks(decks) {
    return {
        type: GET_DECKS,
        ...decks
    }
}

export function createDeck(title) {
    return {
        type: CREATE_DECK,
        title
    }
}

export function handleReceiveDecks() {
    return (dispatch) => {
        getDecks().then(data => {
            dispatch(receiveDecks(data))
        })
    }
}

export function handleCreateDeck(title) {
    return (dispatch) => {
        saveDeckTitle(title).then(() => {
            dispatch(createDeck(title))
        })
    }
}