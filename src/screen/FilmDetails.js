import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';


export const FilmDetails = ({route}) => {
    const {image, title,rating, genre, releaseYear} = route.params;
    

    return (
        <View style={styles.posta}>
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <ImageBackground source={{uri: image}} style={styles.image}></ImageBackground>
                <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.text}>{rating}</Text>
                    <Text style={styles.text}>{genre.join(", ")}</Text>
                    <Text style={styles.text}>{releaseYear}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    posta: {
        width: "100%",
        padingRight: 200
    },
    image: {
        marginTop: 20,
        width: '80%',
        height: 200,
        marginLeft: 60,
        justifyContent: 'center'
    },
    title:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 18,
    }
})
