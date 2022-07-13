import react, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacity, TextInput} from 'react-native';
import { visualizartodosContatos } from './model';

export default function cadastrocontato(navigation){
    return(
        <View style={estilo.container}>
        <TextInput style={estilo.campotexto} placeholder='Digite o Codigo do Contato'/>

        <TextInput style={estilo.campotexto} placeholder='Digite o Nome do Contato'/>
        
        <TextInput style={estilo.campotexto} placeholder='Digite o Telefone do Contato'/>

        <TextInput style={estilo.campotexto} placeholder='Digite o E-mail do Contato'/>

        <TouchableOpacity style={estilo.botao}>
            <Text style={estilo.botaotexto} >Salvar o Contato</Text>
        </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor:"dcdcdc",
        alignItems:'center',
        justifyContent:'center'
    },
    campotexto:{
        backgroundColor=""
    },
    botaotexto:{
        fontSize=20,
    },
    botao:{
        f
    }
})