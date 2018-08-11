import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { handleReceiveDecks } from '../actions/deck'

class DeckList extends Component {
    componentDidMount() {
        this.props.receiveDecks()
    }

    renderItem = ({ item }) => {
        return <Deck title={item.title} questions={DataTransferItemList.questions}/>
    }

    render () {
        const data = this.props.decks
        console.log('State: ', this.props.decks)
        return(
            <View>
                <FlatList 
                    data={}
                    renderItem={this.renderItem}
                />
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