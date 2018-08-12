import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { green, red, blue } from '../utils/colors' 

class Quiz extends Component {
    state = {

    }

    render() {
        const { questions } = this.props.navigation.state.params
        return(
            <View style={styles.container}>
                <Text style={styles.counterText}>1 / {questions.length}</Text>
                <View style={styles.groupA}>
                    <Text style={styles.questionText}>Here is the question, What do you really think of it?</Text>
                    <TouchableOpacity>
                        <Text style={styles.flipText}>Answer</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.groupB}>
                    <TouchableOpacity style={[styles.button, styles.correctButton]}>
                        <Text style={styles.buttonText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.incorrectButton]}>
                        <Text style={styles.buttonText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
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