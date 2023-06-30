import { StyleSheet, Text, View , TextInput,  TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { db } from '../config/firebase';
import { addDoc , collection } from "firebase/firestore"

export default function Formulaire({setUpdate}) {
const[peinture, setPeinture]= useState({})


function addNewPeinture(v,nom){
  const clonePeinture = {...peinture}
  clonePeinture[nom]= v;
  setPeinture(clonePeinture)
}


function submit(){
  addDoc(collection(db, 'peinture'),peinture)
    .then(function(){
      alert('La peinture a été ajoutée en Bdd');
      setLivre({})
      setUpdate(function(update){return !update})
    })
}


  return (
    <View>
      <Text style={{marginTop:20}}>Formulaire</Text>
      <View style={{marginTop: 30}}>
      <TextInput 
        placeholder={'url peinture'} 
        style={styles.input} 
        onChangeText={function(t){addNewPeinture(t, 'peinture')}}
        value={peinture.peinture}/>
      <TextInput placeholder='Nom' 
      style={styles.input}
      onChangeText={function(t){addNewPeinture(t, 'nom')}}
      value={peinture.nom}
      />
      <TextInput placeholder='Description' 
      style={styles.input}
      onChangeText={function(t){addNewPeinture(t, 'description')}}
      value={peinture.description}
      />

      <TextInput placeholder='Auteur'
       style={styles.input}
       onChangeText={function(t){addNewPeinture(t, 'auteur')}}
       value={peinture.auteur}
       />
      <TextInput placeholder='Date de Creation' 
      style={styles.input}
      onChangeText={function(t){addNewPeinture(t, 'date')}}
      value={peinture.date}
      />
 
      </View>
      <TouchableOpacity style={styles.boxBtn} onPress={submit}>
            <Text style={styles.btn}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input : { borderColor : "black" , borderWidth : 1 , borderRadius : 5 , padding : 5 ,marginBottom : 10 },
  btn : { backgroundColor : "red" , padding : 10 , width : "50%" , borderRadius : 10 , textAlign : "center" , fontSize : 22 }
})