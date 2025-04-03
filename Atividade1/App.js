import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {View , Text } from 'react-native';
import { Input } from '@rneui/themed';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Alice Maria da silva</Text>
      <Text>Millena clara Cavalcanti</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function login() {
  return (
    <View style={styles.container}>
      <Text>Email: </Text>
      <Input
         placeholder='E-mail'/>;

      <Text>Senha: </Text>;
      <Input  placeholder='Senha'/>  ;

    
    <Button
      title="Logar"
     titleStyle={{fontweigth:'Bold', fontSize:18 } }
     containerStyle={{marginVertical:10}}
      buttonStyle={{ backgroundColor: '#7fffd4' , borderRadius: 10, }}
    />

<Button
      title="Cadastre-se"
      titleStyle={{fontweigth:'Bold', fontSize:18 } }
     containerStyle={{marginVertical:10}}
      buttonStyle={{ backgroundColor: '#7fffd4' , borderRadius: 10, }}
    />


<Text>Esqueceu a senha </Text>


      <StatusBar style="auto" />
    </View>
  );
}

input.current.focus();
input.current.blur();
input.current.clear();
input.current.isFocused();
input.current.setNativeProps({ value: 'hello' });
input.current.shake();