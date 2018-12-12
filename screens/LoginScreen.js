import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Login',
        tabBarVisible: false,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../images/logF.png')}
                style={styles.imageNav}>
            </Image>
        )
    }

    constructor(props) {
        super(props)
    }

    _onPressButtonFb() {
        // this.props.navigation.navigate('Tab2')
        console.log("fb")
    }

    _onPressButtonGoogle() {
        console.log('home')
    }

    render() {
        return (
            <ImageBackground source={require('../images/bg.png')} style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.title}>NearBy</Text>
                    <Text style={styles.subtitle}>The best deals near you</Text>

                    <TouchableHighlight style={styles.touchBtnFb} onPress={() => this.props.navigation.navigate('Tab1')}>
                        <Image
                            style={styles.btnFb}
                            source={require('../images/logF.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.touchBtnGoogle} onPress={() => this.props.navigation.navigate('Tab1')}>
                        <Image
                            style={styles.btnGoogle}
                            source={require('../images/loginGoogle.png')}
                        />
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        width: '80%',
        height: '80%',
    },

    title: {
        textAlign: 'center',
        fontSize: 80,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },

    btnFb: {
        justifyContent: 'center',
        width: 300,
        height: 60,
    },
    btnGoogle: {
        flex: 1,
        justifyContent: 'center',
        width: 300,
        height: 60,
    },

    touchBtnGoogle: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },

    touchBtnFb: {
        position: 'absolute',
        bottom: 65,
    },
    imageNav: {
        width: 20,
        height: 20,
        tintColor: 'black'
    }
});