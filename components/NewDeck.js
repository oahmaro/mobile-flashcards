import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { handleCreateDeck } from '../actions/deck'
import { connect } from 'react-redux'

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
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextInput 
                    value={this.state.input} 
                    onChangeText={this.handleTextChange}
                    placeholder='Deck Title' />
                <TouchableOpacity onPress={this.submitDeck}>
                    <Text>Submit</Text>
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