import react, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacity, FlatList, Alert} from 'react-native';
import { visualizartodosContatos } from './model';

export default function Home(navigation) {
const [dadosContatos, setDadosContatos] = useEffect([]);

async function buscarContatos(){
  const resutados = await visualizartodosContatos();
  if(resutados){
    setDadosContatos(resutados);
  }else{
    Alert.alert('Sem Contato');
    setDadosContatos('');
  }
}
useEffect(async ()=>{
  const resp = await buscarContatos();
  setDadosContatos(resp);
},[]);

  return (
    <View style={styles.container}>
      <Text>Contato</Text>
      <TouchableOpacity style={estilo.botaocadastra} onPress={()=>navigation.navigate('Cadastro')}>
        <Text style={estilo.botaoTextoCadastra}>Cadastra Contatos</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <FlatList
       data={dadosContatos}
       keyExtractor={dadosContatos => dadosContatos.id}
       renderItem={({item}) =>
       <TouchableOpacity style={estilo.botaodados}>
         <Text style={estilo.botaoTextoDado}>{item.id}</Text>
         <Text style={estilo.botaoTextoDado}>{item.id}</Text>
         <Text style={estilo.botaoTextoDado}>{item.id}</Text>
       </TouchableOpacity>
       }
       />
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
  botaocadastra:{
    backgroundColor:"#2a9d8f",
    margin:15,
    padding:5,
    borderRadius:10,
  },
  botaoTextoCadastra:{
    fontSize:20,
  },
  botaodados:{
    backgroundColor:"#2a9d8f",
    margin:15,
    padding:5,
    borderRadius:10,

  },
  botaoTextoDado:{
    fontSize:20,
  }
});
