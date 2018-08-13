import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { green, red, blue } from '../utils/colors' 
import { withNavigation } from 'react-navigation'

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
                const { questions, wrongGuesses, index, finished } = prevState
                return {
                    wrongGuesses: wrongGuesses + 1 ,
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

    navigateToDeck = () => {
        const { goBack } = this.props.navigation
        goBack()
    }

    restartQuiz = () => {
        this.setState(() => ({
            isFlipped: false,
            correctGuesses: 0,
            wrongGuesses: 0,
            index: 0,
            finished: false,
        }))
    }

    render() {
        const { isFlipped, questions, correctGuesses, wrongGuesses, index, finished } = this.state
        return(
            <View style={styles.container}>
                {
                    (questions) &&
                        (
                            (!finished)
                                ? ( <View style={styles.container}>
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
                                : (
                                    <View style={styles.container}>
                                        <View  style={styles.groupA}>
                                            <Text style={{fontSize: 24, color: '#455356', padding: 10}}>Total Questions: {questions.length}</Text>
                                            <Text style={{fontSize: 24, color: '#455356', padding: 10}}>Correct Guesses: {correctGuesses}</Text>
                                            <Text style={{fontSize: 24, color: '#455356', padding: 10}}>Incorrect Guesses: {wrongGuesses}</Text>                               
                                        </View>
                                        <View style={styles.groupB}>
                                            <TouchableOpacity style={[styles.button, {backgroundColor: blue}]} onPress={this.restartQuiz}>
                                                <Text style={styles.buttonText}>Restart Quiz</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.button, {backgroundColor: blue}]} onPress={this.navigateToDeck}>
                                                <Text style={styles.buttonText}>Back to Deck</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                        )
                }
            </View>
        )
    }
}

export default withNavigation(Quiz)

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