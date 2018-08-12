import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { blue} from '../utils/colors'

class DeckDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title
        }
    }

    render() {
        const { title, questions } = this.props.deck
        return (
            <View style={styles.container}>
                <View style={styles.Box}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{questions.length} cards</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
                    'AddCard',
                    {title: title}
                    )}>
                    <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Start Quiz</Text>
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
        borderRadius: 5,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 75,
        marginHorizontal: 30,
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#455356',
    },
    subTitle: {
        fontSize: 14,
        color: '#838c8e',
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
    },
})