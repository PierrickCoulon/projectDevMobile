import React from 'react';
import { View, Text, Image, StyleSheet, NavigationActions } from 'react-native';

export default class AddScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Add',
        tabBarVisible: true,
        headerRight: 'Lol',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/images/add.png')}
                style={styles.imageNav}>
            </Image>
        ),

    }
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>My Deals</Text>
                <Text>AddScreen Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageNav: {
        width: 20,
        height: 20,
        tintColor: 'black'
    },
    text: {
        fontFamily: "Pacifico",
        position: 'absolute',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        top: 50,
        textShadowColor: 'lightgreen',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
})