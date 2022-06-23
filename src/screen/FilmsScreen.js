import React, {useEffect, useState} from "react";

import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {DATA} from '../data';
import { FilmItem } from "../components/FilmItem";



export const FilmsScreen = ({navigation}) => {
    const [stor, setStor] = useState(null)

    useEffect(()=>{

        const sortedRank = DATA.sort((a, b)=> b.rating > a.rating);
        setStor(sortedRank)

    },[])
    
    return (
        <View>
            <FlatList 
            style={{marginTop: 10}} 
            data={stor} 
            keyExtractor={item => item.image.toString() } 
            renderItem={({item})=>(
                <FilmItem 
                post={item}/>
                )
            }/>
        </View>
    )
}
