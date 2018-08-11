import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Deck extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.subTitle}>{this.props.questions.length} cards</Text>
            </View>
        )
    }
}

export default Deck

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 30,
    },
    subTitle: {
        fontSize: 15,
    }
})