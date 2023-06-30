import { StyleSheet, Text, View , TextInput, Button} from 'react-native'
import React , {useState} from 'react' 
import { db } from '../config/firebase'
import {doc , updateDoc } from "firebase/firestore"

export default function Gestion({item, setId, setUpdate}) {
  const[peinture, setPeinture] = useState(item)

  function addNewPeinture(v,nom){
    const clonePeinture ={...peinture}
    clonePeinture[nom] = v
    setPeinture(clonePeinture)


  }

  function submit(id){
    updateDoc(doc(db,'peinture',id),peinture)
    .then(function(){
      setPeinture({})
      setId('')
      setUpdate(function(update){
        return !update})
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
      <Button title={'go'} onPress={function(){
                submit( peinture.id )
            }} color={'#A7EDE7'} />
    </View>
  )
}

const styles = StyleSheet.create({

  input : { borderColor : "black" , borderWidth :1 , marginBottom : 20 , padding : 10 , borderRadius : 10 }
})