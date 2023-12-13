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
      </View>

      <View>
        <Text style={styles.titulo}>{Textos.titulo}</Text>
        <TouchableOpacity style={styles.botaoInicio}>
           <Text style={styles.textoBotoaInicio}>{Textos.saibaMais}</Text><Svg
          width={35}
          height={35}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3C533C"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M1 12h11M9 7l5 5-4 6" />
        </Svg>
           
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  textoBotoaInicio:{
    color: '#3C533C',
    fontSize: 18,
    
  }
});

export default Inicio;
