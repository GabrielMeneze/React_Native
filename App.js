import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const logar = () => {
    alert('${email} ${senha}');
  }

  return (
    <View style={styles.container}>
      <Text>Bem vindo!</Text>
      <StatusBar style="auto" />

      <Text>Email</Text>
      <TextInput
      style={{ height: 40, width : 200 borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setEmail(text)}
      value={email}
    />

    <Text>Senha</Text>
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
