import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';



import { FilmDetails } from './src/screen/FilmDetails';
import { FilmsScreen } from './src/screen/FilmsScreen';
import Navigate from './src/navigate';



export default function App() {

const [isReady, setIsReady] = useState(false);

// if(!isReady){
// return (<AppLoading 
//   startAsync={bootstrap}
//   onFinish={()=> setIsReady(true)} 
//   onError={err=>console.log(err)} 
//   />)
// }

 
  return(
      <Navigate/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
