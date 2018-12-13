import React from 'react';
import { View, Text, Image, StyleSheet, NavigationActions, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

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
                <Button  
                    icon={{
                        name: 'library-books',
                        size: 35,
                        color: 'white'
                    }}
                    title='My deals'
                    buttonStyle={{
                        backgroundColor: "rgba(46, 204, 113,1.0)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        bottom: 10,
                        borderRadius: 5
                      }}
                />
                <Button
                    icon={{
                        name: 'settings',
                        size: 35,
                        color: 'white'
                    }}
                    title='Settings'
                    buttonStyle={{
                        backgroundColor: "rgba(149, 165, 166,1.0)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                      }}
                />

                <Button
                    icon={{
                        name: 'help',
                        size: 35,
                        color: 'white'
                    }}
                    title='Settings'
                    buttonStyle={{
                        backgroundColor: "rgba(255, 121, 121,1.0)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        top: 10,
                        borderWidth: 0,
                        borderRadius: 5
                      }}
                />

            </View >
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