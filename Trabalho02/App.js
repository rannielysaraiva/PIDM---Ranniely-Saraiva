import React from 'react';
import {  StatusBar, StyleSheet, Text, View } from 'react-native';
import Navbar from './Componentes/Navbar';
import Home from './Componentes/Home';

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor ={"#381859"}></StatusBar>
      <Navbar></Navbar>
      <Home></Home>
    </View>
  );
}