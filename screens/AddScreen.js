import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Camera from 'react-native-camera';

export default class AddScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Add',
        tabBarVisible: true,
        headerRight: 'Lol',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/images/add.png')}
                style={styles.imageNav}>
            </Image>
        ),

    }
    constructor(props) {
        super(props)

        this.state = { title: 'Deal Title', desc: 'Deal Description', position: 'Position' };
    }

    takePicture() {
        const options = {}

        this.camera.capture({ metadata: options }).then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>My Deals</Text>
                <Text style={styles.dealTitle}>Deal Title</Text>
                <TextInput
                    style={styles.txtInputTitle}
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                />
                <Text style={styles.dealDesc}>Deal Description</Text>
                <TextInput
                    style={styles.txtInputDesc}
                    onChangeText={(desc) => this.setState({ desc })}
                    value={this.state.desc}
                />
                <Text style={styles.dealPosition}>Where ?</Text>
                <TextInput
                    style={styles.txtInputPosition}
                    onChangeText={(position) => this.setState({ position })}
                    value={this.state.position}
                />
                <Camera ref={(cam) => {
                    this.camera = cam
                }}
                    style={styles.viewcam}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture}
                        onPress={this.takePicture.bind(this)}>
                        [TAKE SCREEN]</Text>
                </Camera>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    viewcam: {
        height: '30%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
    },
    capture: {
        fontSize: 17,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        color: 'black',
        position: 'absolute',
        top: 5,
        height: 35,
        width: 200,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textShadowColor: 'lightgreen',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
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
    },
    dealTitle: {
        fontFamily: "Pacifico",
        position: 'absolute',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        top: 120,
        left: 20,
        textShadowColor: 'lightgreen',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    dealDesc: {
        fontFamily: "Pacifico",
        position: 'absolute',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        top: 240,
        left: 20,
        textShadowColor: 'lightgreen',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    dealPosition: {
        fontFamily: "Pacifico",
        position: 'absolute',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        top: 360,
        left: 20,
        textShadowColor: 'lightgreen',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    txtInputTitle: {
        height: 50,
        borderColor: 'lightgrey',
        borderWidth: 1,
        position: 'absolute',
        width: 250,
        top: 170,
        left: 20
    },
    txtInputPosition: {
        height: 50,
        borderColor: 'lightgrey',
        borderWidth: 1,
        position: 'absolute',
        width: 250,
        top: 420,
        left: 20
    },
    txtInputDesc: {
        height: 50,
        borderColor: 'lightgrey',
        borderWidth: 1,
        position: 'absolute',
        width: 250,
        top: 300,
        left: 20
    }
})