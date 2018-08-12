import React, { Component } from 'react'
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    render() {
        return (
            <View>
                <TextInput placeholder='Question'/>
                <TextInput placeholder='Answer'/>
                <TouchableOpacity onPress={() => console.log(pressed)}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddCard

const styles = StyleSheet.create({

})