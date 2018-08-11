import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { handleReceiveDecks } from '../actions/deck'
import Deck from './Deck'

class DeckList extends Component {
    componentDidMount() {
        this.props.receiveDecks()
    }

    renderItem = ({ item }) => {
        return <Deck title={item.title} questions={item.questions}/>
    }

    render () {
        const data = Object.values(this.props.decks)
        console.log('Important', data)
        return(
            Object.keys(data).length === 0 
            ? <Text>Loading...</Text> 
            : <View>
                <FlatList 
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.title}
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