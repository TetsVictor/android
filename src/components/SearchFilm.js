import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button} from 'react-native';


export const SearchFilm = ({onSubmit, returnStor}) => {
    const [value, setValue] = useState('');

    const searchHendler = () => {
        onSubmit(value);
        setValue('');
    }

    return (
    <View style={styles.block}>
            <TextInput style={styles.input} 
            onChangeText={setValue} 
            value = {value} 
            placeholder="Movie search..."
            />
            <Button title="Serch" onPress={searchHendler}/>
            {/* <Button title="Назад" onPress={()=>{returnStor()}}/> */}
    </View>
        )

}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    input: {
        width: '76%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#343434',
    }
})

