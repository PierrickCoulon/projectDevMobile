import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import { title, description, position, listFavIsEmpty, ListFav, ListFavByIdx, path } from '../controllers/globals'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/images/home.png')}
                style={styles.imageNav}>
            </Image>
        )
    }
    constructor(props) {
        super(props)
        this.rendermap = this.rendermap.bind(this);
        this.rendercard = this.rendercard.bind(this);
    }

    onPress = (index) => {
        console.warn(index + 'On press')
        ListFav(false);
        ListFavByIdx(index, true)

    }

    rendercard(value, index) {
        return (<Card title={value} titleStyle={styles.text}>
            <Image source={path[index]} style={styles.image} />
            <Text style={styles.text}>Deal description:</Text>
            <Text style={styles.text1}>{"\n"}{description[index]}</Text>
            <Text style={styles.text}>Where to find it:</Text>
            <Text style={styles.text1}>{"\n"}{position[index]}</Text>
            <Button key={index} icon={{ name: 'favorite', size: 20, color: 'white' }} onPress={() => this.onPress(index)} buttonStyle={styles.buttonStyle} />
        </Card>)
    }

    rendermap = () => {
        return title.map((value, index) => (
            this.rendercard(value, index)
        ))
    }


    render() {
        return (
            <ScrollView>
                {
                    this.rendermap()
                }
            </ScrollView>
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
        fontSize: 21,
        lineHeight: 30,
        textShadowColor: '#7f8c8d',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    text1: {
        fontFamily: "Pacifico",
        fontSize: 18,
        lineHeight: 20,
        textShadowColor: '#95a5a6',
        bottom: 10,
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    buttonStyle: {
        backgroundColor: '#ff7675',
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
    },
    image: {
        flex: 1,
        width: 70,
        height: 70,
        alignItems: 'center',
        resizeMode: 'contain'
    }

})