import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleReceiveDecks } from '../actions/deck'
import Deck from './Deck'

class DeckList extends Component {
    componentDidMount() {
        this.props.receiveDecks()
    }

    renderItem = ({ item }) => {
        return <Deck 
                    title={item.title} 
                    questions={item.questions}
                    navigation={this.props.navigation}
                    />
    }

    render () {
        const data = Object.values(this.props.decks)
        // console.log('Important', data)
        return(
            Object.keys(data).length === 0 
            ? <View style={styles.container}>
                <Text style={styles.emptyDeckWarning}>Your list is empty, Create new deck!</Text> 
            </View>
            : <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    numColumns='2'  
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eaeaea',
    },
    flatList: {
        margin: 10,
    },
    emptyDeckWarning: {
        fontSize: 22,
        padding: 10,
        color: '#455356',
    }
})