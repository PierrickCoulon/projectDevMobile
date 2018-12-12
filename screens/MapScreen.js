import React from 'react';
import { View, Text, Image, StyleSheet, NavigationActions } from 'react-native';

export default class MapScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Map',
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/map.png')}
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
                <Text>MapScreen Screen</Text>
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