import React from 'react';
import { View, Text, Image, StyleSheet, NavigationActions } from 'react-native';

export default class FavoriteScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Favorite',
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/fav.png')}
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
                <Text>Favorite Screen</Text>
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