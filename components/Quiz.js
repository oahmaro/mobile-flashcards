import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { green, red, blue } from '../utils/colors' 

class Quiz extends Component {
    state = {
        isFlipped: false,
        questions: null, 
        correctGuesses: 0,
        wrongGuesses: 0,
        index: 0,
        finished: false,
    }

    componentDidMount() {
        const { questions } = this.props.navigation.state.params
        this.setState(() => ({
            questions
        }))
    }

    onCorrect = () => {
        if (!this.state.finished) {
            this.setState((prevState) => {
                const { questions, correctGuesses, index, finished } = prevState
                return {
                    correctGuesses: correctGuesses + 1 ,
                    index: index === (questions.length - 1) ? questions.length - 1 : index + 1,
                    finished: index === (questions.length - 1) && !finished 
                }
            })
        }
    }

    onIncorrect = () => {
        if (!this.state.finished) {
            this.setState((prevState) => {
                const { questions, incorrectGuesses, index, finished } = prevState
                return {
                    incorrectGuesses: incorrectGuesses + 1 ,
                    index: index === (questions.length - 1) ? questions.length - 1 : index + 1,
                    finished: index === (questions.length - 1) && !finished 
                }
            })
        }
    }

    handleFilp = () => {
        this.setState((prevState) => ({
            isFlipped: !prevState.isFlipped
        }))
    }

    render() {
        const { isFlipped, questions, correctAnswers, wrongAnswers, index, finished } = this.state
        
        return(
            <View style={styles.container}>
                {
                    (questions && !finished)
                        && ( <View style={styles.container}>
                                <Text style={styles.counterText}>{index + 1} / {questions.length}</Text>
                                <View style={styles.groupA}>
                                    <Text style={styles.questionText}>{isFlipped ? questions[index].answer : questions[index].question}</Text>
                                    <TouchableOpacity onPress={this.handleFilp}>
                                        <Text style={styles.flipText}>{isFlipped ? 'Question': 'Answer'}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.groupB}>
                                    <TouchableOpacity style={[styles.button, styles.correctButton]} onPress={this.onCorrect}>
                                        <Text style={styles.buttonText}>Correct</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.button, styles.incorrectButton]} onPress={this.onIncorrect}>
                                        <Text style={styles.buttonText}>Incorrect</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>)
                }
            </View>
        )
    }
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    groupA: {
        marginTop: 115,
        flex: 2,
        alignItems: 'center',
    },
    groupB: {
        flex: 1,
    },
    counterText: {
        padding: 10,
        fontSize: 18,
    },
    questionText: {
        textAlign: 'center',
        fontSize: 32,
        color: '#455356',
        marginHorizontal: 20,
    },
    flipText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: red,
        marginHorizontal: 30,
        marginTop: 25,
    },
    button: {
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
    correctButton: {
        backgroundColor: green,
    },
    incorrectButton: {
        backgroundColor: red,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',      
    }
})