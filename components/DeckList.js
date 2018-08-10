import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class DeckList extends Component {
    render () {
        console.log('State: ', this.props.decks)
        return(
            <View>
                <Text>DeckList</Text>
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {
        decks: state,
    }
}

export default connect(mapStateToProps)(DeckList)