import React, { Component } from 'react'
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { blue } from '../utils/colors'
import { connect } from 'react-redux'
import { handleCreateCard } from '../actions/card'
class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    handleQuestionChange = (text) => {
        this.setState(() => ({
            question: text
        }))
    }

    handleAnswerChange = (text) => {
        this.setState(() => ({
            answer: text
        }))
    }

    handleSubmitCard = () => {
        const { question, answer } = this.state
        const card = {question, answer}
        const title = this.props.navigation.state.params.title

        if (question === '' && answer === '') {
            Alert.alert(
                "Empty Fields",
                "You need to fill both fields!",
                [{text: "OK", onPress:() => {}}],
                {cancelable: false}
            )
        } else {
            this.props.createCard(title, card)

            // set values back to empty
            this.setState(() => ({
                question: '',
                answer: ''
            }))
        }
    }

    render() {
        return (
            <View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={this.state.question}
                        style={styles.input} 
                        placeholder='Question' 
                        onChangeText={this.handleQuestionChange}/>
                    <TextInput 
                        value={this.state.answer}
                        style={styles.input} 
                        placeholder='Answer'
                        onChangeText={this.handleAnswerChange}
                        />
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSubmitCard}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch, {navigation}) => ({
    createCard: (title, card) => dispatch(handleCreateCard(title, card))
})

export default connect(null, mapDispatchToProps)(AddCard)

const styles = StyleSheet.create({
    container: {

    },
    inputContainer: {
        marginTop: 30,
    },
    input: {
        marginHorizontal: 30,
        marginBottom: 30,
        padding: 10,
    },
    button: {
        backgroundColor: blue,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15,
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