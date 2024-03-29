import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import { HomeScreen } from '../telas/HomeScreen';
import { Login } from './Login';
import { Projetos } from './Projetos';
import { SobreNos } from './SobreNos';
import { Parceiros } from './Parceiros';
import { Localizacao } from './Localizacao';
import { Agenda } from './Agenda';
import ProjetosPrincipais from '../componentes/projetos';

const Drawer = createDrawerNavigator();

export default function Routers() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3C533C",
        },
        headerTintColor: '#fff',
        headerTitle: ' ', // Espaço em branco para simular a ausência de texto
        headerRight: () => (
          <Image
            source={require('../../assets/topo.png')}
            style={{ width: 80, height: 80, marginHorizontal: 10 }}
          />
        ),
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Agenda" component={Agenda} />
      <Drawer.Screen name="Projetos" component={ProjetosPrincipais} />
      <Drawer.Screen name="Sobre Nós" component={SobreNos} />
      <Drawer.Screen name="Parceiros" component={Parceiros} />
      <Drawer.Screen name="Localização" component={Localizacao} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}
