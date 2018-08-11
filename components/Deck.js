import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Deck extends Component {
    render() {
        return(
            <View style={styles.box}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.subTitle}>
                        {this.props.questions.length} cards
                    </Text>
                </View>

            </View>
        )
    }
}

export default Deck

const styles = StyleSheet.create({
    box: {
        flex: 1,
        height: 200,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        margin: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 6,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#455356',
    },
    subTitle: {
        fontSize: 14,
        color: '#838c8e',
    }
})