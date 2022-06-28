import React, {useEffect, useState} from "react";

import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {DATA} from '../data';
import { FilmItem } from "../components/FilmItem";
import { SearchFilm } from "../components/SearchFilm";


export const FilmsScreen = ({navigation}) => {
    const [stor, setStor] = useState(DATA);
    const [search, setSearch] = useState(null);
    const [flag, setFlag] = useState(false)
    const [temp, setTemp] = useState(stor);

    useEffect(()=>{
            if(search){
                searchFilm(search);
            } else {
                const sortedRank = temp.sort((a, b)=> b.rating > a.rating);
                setStor(sortedRank)
            }
            setFlag(false)
        },[flag]);

    function returnStor(){
        setTemp(stor)
    }

    function onSubmit(value){
        setSearch(value);
        setFlag(true);
    }
    
    function searchFilm(search){
        
             const res = temp.filter(f => f.title === search);
              setTemp(res);
        
    }

    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <SearchFilm onReturnStor={returnStor} onSubmit={onSubmit}/>
                <Button title="Back" onPress={()=>setTemp(stor)}/>
            </View>
            <FlatList 
            style={{marginTop: 10}} 
            data={temp} 
            keyExtractor={item => item.image.toString() } 
            renderItem={({item})=>(
                <FilmItem 
                post={item}/>
                )
            }/>
        </View>
    )
}
