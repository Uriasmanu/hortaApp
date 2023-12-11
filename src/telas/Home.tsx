import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Inicio from '../componentes/Inicio';
import Projetos from '../componentes/projetos';
import OutrosProjetos from '../componentes/outrosProjetos';
import Localizacao from '../componentes/localizacao';
import Footer from '../componentes/footer';

const Home = () => {
  return (
    <View>
      <Inicio/>
      <Projetos/>
      <OutrosProjetos/>
      <Localizacao/>
      <Footer/>
    </View>
  );
};



export default Home;
