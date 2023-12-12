import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';


import Textos from '../mocks/textos';

const Inicio: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.logo}>
          <Image source={require('../../assets/topo.png')} style={styles.logoImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu} onPress={toggleMenu}>
          {menuOpen ? (
            <Svg
              width={45}
              height={45}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <Path d="M18 6L6 18M6 6l12 12" />
            </Svg>
          ) : (
            <Svg
              width={45}
              height={45}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <Path d="M3 12h18M3 6h18M3 18h18" />
            </Svg>
          )}
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.titulo}>{Textos.titulo}</Text>
        <TouchableOpacity style={styles.botaoInicio}>
           <Text style={styles.textoBotoaInicio}>{Textos.saibaMais}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    flex: 1,
  },
  logoImage: {
    width: 80,
    height: 80,
    marginHorizontal: 12,
  },
  menu: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  titulo:{
    width: '90%',
    fontSize: 30,
    lineHeight: 40,
    color: "#fff",
    fontWeight: "bold",
    marginHorizontal: 12,
    marginVertical: 10,
    
  },
  botaoInicio:{
    width: "92%",
    height: "auto",
    backgroundColor: '#98ff6c',
    marginHorizontal: 12,
    paddingStart: 8,
    
  },
  textoBotoaInicio:{
    color: '#3C533C',
    fontSize: 18
  }
});

export default Inicio;
