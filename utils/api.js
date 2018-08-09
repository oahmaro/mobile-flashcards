import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, setDummyData } from './helpers'

export function getDecks () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then( results => results === null ? setDummyData : JSON.parse(results))
}

export function getDeck (id) {
    const decks = getDecks()

    return decks[id]
}

export function saveDeckTitle (title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    }))
}

export function addCardToDeck (title, card) {
    const decks = getDecks()
    decks[title].questions.push(card)
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(decks))
}