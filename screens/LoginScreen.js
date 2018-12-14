import React from 'react';
import { PermissionsAndroid, View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';

async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Nearby Permissions',
          'message': 'Nearby needs to access location'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Location ok")
      } else {
        console.log("Location not ok")
      }
    } catch (err) {
      console.warn(err)
    }
  }
  
  async function requestcLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          'title': 'Nearby Permissions',
          'message': 'Nearby needs to access location'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Location ok")
      } else {
        console.log("Location not ok")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Nearby Permissions',
          'message': 'Nearby needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera")
      } else {
        console.log("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  async function requestReadPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          'title': 'Nearby Permissions',
          'message': 'Nearby needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use read the storage")
      } else {
        console.log("Read permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }
  async function requestWritePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          'title': 'Nearby Permissions',
          'message': 'Nearby needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can Write on the storage")
      } else {
        console.log("Write permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

export default class LoginScreen extends React.Component {


    
    static navigationOptions = {
        tabBarLabel: 'Login',
        tabBarVisible: false,
        header: null,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/images/logF.png')}
                style={styles.imageNav}>
            </Image>
        )
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        requestLocationPermission();
        requestcLocationPermission();
        requestCameraPermission();
        requestReadPermission();
        requestWritePermission();
    }

    render() {
        return (
            <ImageBackground source={require('../assets/images/bg.png')} style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.title}>NearBy</Text>
                    <Text style={styles.subtitle}>The best deals near you</Text>

                    <TouchableHighlight style={styles.touchBtnFb} onPress={() => this.props.navigation.navigate('Tab1')}>
                        <Image
                            style={styles.btnFb}
                            source={require('../assets/images/logF.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.touchBtnGoogle} onPress={() => this.props.navigation.navigate('Tab1')}>
                        <Image
                            style={styles.btnGoogle}
                            source={require('../assets/images/loginGoogle.png')}
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
        fontFamily: "Pacifico",
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
        fontFamily: "Pacifico",
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