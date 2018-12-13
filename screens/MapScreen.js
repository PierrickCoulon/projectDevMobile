import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Alert } from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATTITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO


export default class MapScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Map',
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/images/map.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)

        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition: {
                latitude: 0,
                longitude: 0
            }
        }
    }


    didFocusSubscription = this.props.navigation.addListener(
        'didFocus',
        payload => {
            let moment = require("moment");
            if ("default" in moment) {
                moment = moment["default"];
            }
            if (!global.nearDiscounts) {
                Alert.alert(
                    'No discount',
                    'We do not have any offers to offer you according to your position :/ ',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                  )
            }
        }
    );


    watchID = null
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATTITUDE_DELTA,
                longitudeDelta: LONGTITUDE_DELTA
            }

            this.setState({ initialPosition: initialRegion })
            this.setState({ markerPosition: initialRegion })
        },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })

        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var lastRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATTITUDE_DELTA,
                longitudeDelta: LONGTITUDE_DELTA
            }

            this.setState({ initialPosition: lastRegion })
            this.setState({ markerPosition: lastRegion })
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map} region={this.state.initialPosition}>
                    <MapView.Marker coordinate={this.state.markerPosition}>
                        <View style={styles.radius}>
                            <View style={styles.marker}></View>
                        </View>
                    </MapView.Marker>
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0, 112, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageNav: {
        width: 20,
        height: 20,
        tintColor: 'black'
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF'
    }
})