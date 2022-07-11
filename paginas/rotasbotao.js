import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import {navigationContainer} from "@react-navigation/native";
import {createNativeStackNavigation} from "@react-navigation/native-stack"

const  nave =createNativeStackNavigation();

import Home from '../paginas/home';
import Cadastro from '../paginas/cadastrocontato'

export default function Home() {
  return (
        <navigationContainer>
            <nave.Navigator>
                <nave.Screen name="Home" component={Home}/>
                <nave.Screen name="Cadastro" component={Cadastro}/>
            </nave.Navigator>
        </navigationContainer>
  );
}
