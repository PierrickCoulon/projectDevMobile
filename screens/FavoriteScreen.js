import React from 'react';
import { Alert, View, Text, Image, StyleSheet, NavigationActions, Colors, ScrollView } from 'react-native';
import { Card , Button } from 'react-native-elements'
import { title,
    description,
    position,
    favorites,
    listFavIsEmpty,
    nearDiscounts,
    ListFav,
    ListFavByIdx,
} from '../controllers/globals'

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

    render() {
        if (listFavIsEmpty) {
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
                <ScrollView>
                {
                    title.map((value, index) => {
                        
                    if (favorites[index] = true)
                    {
                        
                    <Card
                    key={index}
                    title={value}
                    >
                    <Text style={{marginBottom: 0, fontSize: 16}}>
                      Deal description:
                    </Text>
                    <Text style={{marginBottom: 10}}>
                     {"\n"}{description[index]}
                     </Text>
                     <Text style={{marginBottom: 0, fontSize: 16}}>
                      Where to find it:
                    </Text>
                    <Text style={{marginBottom: 10}}>
                     {"\n"}{position[index]}
                    </Text>
                    <Button
                        icon={{
                            name: 'block',
                            size: 20,
                            color: 'white'
                        }}
                        backgroundColor='#00000'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        />
                  </Card>}
                  })
                }
            </ScrollView>
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