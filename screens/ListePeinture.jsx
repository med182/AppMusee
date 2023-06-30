import {StyleSheet,Text,View,Dimensions,FlatList,Button,Image} from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import Confirm from "./Confirm";
import Gestion from "./Gestion";

export default function ListePeinture({ update, setUpdate }) {
  const [peinture, setPeinture] = useState([]);
  const [id, setId] = useState("");

  useEffect(
    function () {
      getDocs(collection(db, "peinture")).then(function (response) {
        const res = response.docs.map(function (doc) {
          return { ...doc.data(), id: doc.id };
        });
        setPeinture(res);
      });
    },
    [update]
  );

  function supprimer(id) {
    deleteDoc(doc(db, "peinture", id)).then(function () {
      setUpdate(function (update) {
        return !update;
      });
      alert("la peinture a bien été supprimé de la bdd");
    });
  }

  return (
    <View>
      <Text style={{ color: "red" }}>Liste des Peintures</Text>
      <View style={{ height: "auto" }}>
        <FlatList
          data={peinture}
          renderItem={function ({ item }) {
            return (
              <View>
                {item.id === id ? 
                  <Gestion item={item} setUpdate={setUpdate} setId={setId} />
                 : 
                  <View>
                    <Text>titre : {item.nom}</Text>
                    <Text>id : {item.id}</Text>
                    <Image
                      source={{
                        uri: item.peinture,
                        width: Dimensions.get("window").width - 40,
                        height: 150,
                      }}
                      fadeDuration={2000}
                    />
                    <View  style={{padding:20}}>
               
                      <Text>Auteur : {item.auteur}</Text>
                      <Text>Description : {item.description}</Text>
                      <Text>Date de création : {item.date}</Text>
                 

                      <View style={{padding: 20}}>
                        <Button
                          title={"modifier"}
                          onPress={function () {
                            setId(item.id);
                          }}
                          color={"#006266"}
                        />
                        <Button
                          title={"supprimer"}
                          onPress={function () {
                            Confirm(function () {
                              supprimer(item.id);
                            });
                          }}
                          color={"#EA2027"}
                        />
                      </View>
                    </View>
                  </View>
  }
              </View>
            );
          }}
          keyExtractor={function () {
            return Math.random().toString();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
