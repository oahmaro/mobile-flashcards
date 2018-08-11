import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';

class DeckDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title
        }
    }

    render() {
        return (
            <View>
                <Text>Deck One</Text>
                <Text>3 cards</Text>
                <TouchableOpacity>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state, { navigation }) => {
    return {
        deck: state[navigation.state.params.title]
    }
}

export default connect(mapStateToProps, null)(DeckDetail)

const styles = StyleSheet.create({
    Box: {

    },
    title: {

    },
    subTitle: {

    },
    button: {

    }
})