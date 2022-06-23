import React from 'react';
import {View, StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';





export const FilmItem = ({post}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.post}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 20}}>
                <View style={styles.title}>
                <Text>{post.title}</Text>
                <Text>{post.rating}</Text>
                <Text>{post.genre.join(", ")}</Text>
                <Text>{post.releaseYear}</Text>
                </View>
                <TouchableOpacity onPress={()=> {navigation.navigate('FilmDetails', post)}}>
                <ImageBackground source={{uri: post.image}} style={styles.image}>
                
                </ImageBackground>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        // overflow: 'hidden',
        // flex: 1,
        // flexDirection: 'row',
        
    },
    image: {
        width: 130,
        height: 130,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    title:{
        alignItems: 'flex-end',
        marginRight: 15
    }
})















