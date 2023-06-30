import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import ListePeinture from './ListePeinture'



export default function Acceuil({navigation}) {
  return (

        <View flex={1} >

       
        
          <View style={{ flexDirection : "row" , justifyContent : "space-between" , marginVertical : 10 }}>
        <Button title={'Créer une nouvelle oeuvre'} onPress={function(){
            navigation.navigate("Formulaire de creation")
        }} />
        
      
        <Button title={'Gérer'} onPress={function(){
            navigation.navigate("Gestion")
        }} />
        </View>
           <View style={{padding:40}}>
        <ListePeinture/>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({})