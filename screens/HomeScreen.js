import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/home.png')}
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
    }
})