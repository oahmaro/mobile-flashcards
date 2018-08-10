import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { handleReceiveDecks } from '../actions/deck'

class DeckList extends Component {
    componentDidMount() {
        this.props.receiveDecks()
    }

    render () {
        console.log('State: ', this.props.decks)
        return(
            <View>
                <Text>DeckList</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
        decks: state,
})

const mapDispatchToProps = dispatch => ({
    receiveDecks: () => dispatch(handleReceiveDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)