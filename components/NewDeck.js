import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { handleCreateDeck } from '../actions/deck'
import { connect } from 'react-redux'
import { blue } from '../utils/colors'

class NewDeck extends Component {
    state = {
        input: '',
    }

    handleTextChange = (input) => {
        this.setState(() => ({
            input
        }))
    }

    submitDeck = () => {
        // check error when user submit empty text
        const { input } = this.state
        
        this.props.createDeck(input).then(() => {
            console.log('New State', this.props.state)
        })

        this.setState(() => ({
            input: ''
        }))
    }

    render () {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.input} 
                    onChangeText={this.handleTextChange}
                    placeholder='Deck Title' />
                <TouchableOpacity style={styles.button} onPress={this.submitDeck}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    state,
})

const mapDispatchToProps = dispatch => ({
    createDeck: (title) => dispatch(handleCreateDeck(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea'
    },
    text: {
        fontSize: 22,
        color: '#455356',
        margin: 30,
    },
    input: {
        margin: 30,
        padding: 10,

    },
    button: {
        backgroundColor: blue,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 6,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    }

})