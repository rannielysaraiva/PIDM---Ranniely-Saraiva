import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './componentes/Cabecalho';
import Corpo from './componentes/Corpo';
import Disciplina from './componentes/Disciplina';


export default function App() {
  return (
    <View >
      <Cabecalho nome="Ranniely" curso="Design Digital"></Cabecalho>
      <Corpo></Corpo>
      <Disciplina disciplina="PiDM"></Disciplina>
      <Disciplina disciplina="Projeto IV"></Disciplina>
     </View>
  );
} 