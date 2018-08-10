import { GET_DECKS } from './actionTypes'
import { CREATE_DECK } from './actionTypes'
import { getDecks, saveDeckTitle } from '../utils/api'

export function receiveDecks(decks) {
    return {
        type: GET_DECKS,
        decks
    }
}

export function createDeck(title) {
    return {
        type: CREATE_DECK,
        title
    }
}

export const handleReceiveDecks = () => dispatch => (
    getDecks().then(data => {
        dispatch(receiveDecks(data))
    })
)

export const handleCreateDeck = ({title}) => dispatch => (
    saveDeckTitle(title).then(() => {
        dispatch(createDeck(title))
    })
)
