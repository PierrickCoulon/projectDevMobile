import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/images/home.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Best Deals</Text>
                <Text>Home Screen</Text>
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