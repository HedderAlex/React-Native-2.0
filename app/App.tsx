import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Linking, Image} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack= createStackNavigator();
const linkedin = "https://www.google.com.br/";
const github = "https://www.youtube.com/";
const email = "mailto:heddercontato@gmail.com";

//Tela Home principal
function HomeScreen({navigation}){
   return (
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      }}>
        <Image
        source={require('./images/foto.jpg')}
        style={{borderRadius: 300, borderColor: "black", borderWidth: 1}}
      />
         <Text style={{fontSize: 30}}>
            Hédder Alex Versiane Barduco Filho
         </Text>
         <TouchableOpacity style={{width:240}}>
          <Text style={{
            backgroundColor:"black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            fontSize: 25,
            textAlign: "center"
          }} onPress={()=>{Linking.openURL('https://www.linkedin.com/in/hédder-alex-versiane-barduco-filho-82642626a/')}}>Linkedin</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{width:240}}>
          <Text style={{
            backgroundColor:"black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            fontSize: 25,
            textAlign: "center"
          }}onPress={()=>{Linking.openURL('https://github.com/HedderAlex')}}>Github</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{width:240}}>
          <Text style={{
            backgroundColor:"black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            fontSize: 25,
            textAlign: "center"
          }}onPress={()=>{Linking.openURL('mailto:heddercontato@gmail.com')}}>E-mail</Text>
         </TouchableOpacity>
         <TouchableOpacity
          onPress={()=>navigation.navigate('Minhas Habilidades')}
          style={{width:240}}>
          <Text style={{
            backgroundColor:"black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            marginVertical: 10,
            fontSize: 25,
            textAlign: "center"
          }} >Minhas Habilidades</Text>
         </TouchableOpacity>

         
      </View>
   );
}
//Tela segundária
function HomeSecundaria({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, padding: 10 }}>
        Minhas Habilidades
      </Text>

      {/* Container para todas as habilidades */}
      <View style={{ alignItems: 'flex-start' }}>
        {/* Habilidade: HTML */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{
            backgroundColor: "black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            fontSize: 25,
            textAlign: "center", // Centraliza o texto
            width: 150 // Largura fixa para o texto
          }}>HTML:</Text>
          {/* Estrelas */}
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={require('./images/estrela.png')}
              style={{ width: 50, height: 50, marginLeft: 5 }}
            />
          ))}
        </View>

        {/* Habilidade: CSS */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{
            backgroundColor: "black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            fontSize: 25,
            textAlign: "center", // Centraliza o texto
            width: 150 // Mesma largura
          }}>CSS:</Text>
          {/* Estrelas */}
          {[...Array(2)].map((_, index) => (
            <Image
              key={index}
              source={require('./images/estrela.png')}
              style={{ width: 50, height: 50, marginLeft: 5 }}
            />
          ))}
        </View>

        {/* Habilidade: JavaScript */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{
            backgroundColor: "black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            fontSize: 25,
            textAlign: "center", // Centraliza o texto
            width: 150 // Mesma largura
          }}>JavaScript:</Text>
          {/* Estrela */}
          <Image
            source={require('./images/estrela.png')}
            style={{ width: 50, height: 50, marginLeft: 5 }}
          />
        </View>

        {/* Habilidade: Python */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Text style={{
            backgroundColor: "black",
            color: "white",
            padding: 10,
            borderRadius: 10,
            fontSize: 25,
            textAlign: "center", // Centraliza o texto
            width: 150 // Mesma largura
          }}>Python:</Text>
          {/* Estrelas */}
          {[...Array(3)].map((_, index) => (
            <Image
              key={index}
              source={require('./images/estrela.png')}
              style={{ width: 50, height: 50, marginLeft: 5 }}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Hédder Alex Versiane Barduco Filho')} style={{ padding: 5 }}>
        <Text style={{
          backgroundColor: "black",
          color: "white",
          padding: 10,
          borderRadius: 10,
          marginVertical: 10,
          fontSize: 25,
          textAlign: "center"
        }}>Página Principal</Text>
      </TouchableOpacity>
    </View>
  );
}




//Configurar as rotas no Stack Navigator 

function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
           <Stack.Screen name="Hédder Alex Versiane Barduco Filho" component={HomeScreen}/>
           <Stack.Screen name="Minhas Habilidades" component={HomeSecundaria} />
        </Stack.Navigator>
      </NavigationContainer>
     );
}
export default App;