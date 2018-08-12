import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './helpers'

export function getDecks () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function getDeck (id) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(decks => JSON.parse(decks[id]))
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    }))
}

export function addCardToDeck (title, card) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const decks = JSON.parse(results)
            const newDeck = {
                ...decks,
                [title]: {
                    title: title,
                    questions: [...decks[title].questions, card]
                }
            }
            AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(newDeck))
        })
}