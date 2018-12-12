import React from 'react';
import { View, Text, Image, StyleSheet, NavigationActions, Colors } from 'react-native';

export default class FavoriteScreen extends React.Component {
    static navigationOptions = {
        //   title: 'My Favorites',
        tabBarLabel: 'Favorite',
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/images/fav.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)
    }


    // didFocusSubscription = this.props.navigation.addListener(
    //     'didFocus',
    //     payload => {
    //         let moment = require("moment");
    //         if ("default" in moment) {
    //             moment = moment["default"];
    //         }
    //     }
    // );


    render() {
        if (!global.listFavIsEmpty) {
            //Empty List
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>My Favorites</Text>
                    <Image source={require('../assets/images/heartBroken.png')}
                        style={styles.image}>
                    </Image>
                    <Text style={styles.txt1}>Your Favorites list is empty.</Text>
                    <Text style={styles.txt2}>Add the deals you don't want to miss and retrieve them here.</Text>
                </View>
            );
        } else {
            // List fav fill
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>My Favorites</Text>
                    <Text>Favorite Screen</Text>
                </View>
            );
        }
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
    image: {
        width: 150,
        height: 150,
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
    },
    txt1: {
        fontFamily: "Pacifico",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
    },
    txt2: {
        fontFamily: "Pacifico",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
    }
})