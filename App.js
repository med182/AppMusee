import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as S} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Acceuil from './screens/Acceuil';
import Formulaire from './screens/Formulaire';
import Gestion from './screens/Gestion';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
         <NavigationContainer>
        <Stack.Navigator >
      
          <Stack.Screen name={'Accueil'} component={Acceuil} options={{
            // headerTitle : "Bienvenue sur l'Accueil ⚽", 
            headerStyle : {backgroundColor : "#2f3542"}, 
            headerTintColor : "white",
            headerTitleAlign : "center"
          }} />
          <Stack.Screen name={'Formulaire de creation'} component={Formulaire} options={{
         
          }}/>
          <Stack.Screen name={'Gestion'} component={Gestion}  />
   
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : S.currentHeight


  },
});
