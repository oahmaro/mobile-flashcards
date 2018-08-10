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
        const title = this.state.input
        handleCreateDeck(title)
        this.setState(() => ({
            input: ''
        }))
        console.log('New State: ', this.props.state)
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

function mapStateToProps (state) {
    return {
        state
    }
}
export default connect (mapStateToProps)(NewDeck)