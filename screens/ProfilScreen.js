import React from 'react';
import { View, Text, Image, StyleSheet, NavigationActions } from 'react-native';

export default class ProfilScreen extends React.Component {
    static navigationOptions = {
        // title: 'My Profil',
        tabBarLabel: 'Profil',
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/images/profil.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)
    }


    render() {
        const { currentPage } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.text}>My Account</Text>
                <Text>Profil Screen</Text>
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