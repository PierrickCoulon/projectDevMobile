import React from 'react';
import { View, Text, Image, StyleSheet, NavigationActions } from 'react-native';

export default class ProfilScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Profil',
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/profil.png')}
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
    }
})