import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Inicio: React.FC = () => {
  return (
    <View style={styles.container} >
  
      <TouchableOpacity style={styles.logo} >
        <Image source={require('../../assets/topo.png')}  style={styles.logoImage} />
      </TouchableOpacity>

      <TouchableOpacity  style={styles.menu} >
        <Svg 
          width={50}
          height={50}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M3 12h18M3 6h18M3 18h18" />
        </Svg>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  logo: {
    flex: 1,
  
  },
  logoImage: {
    width: 80,
    height: 80,
    marginHorizontal: 12,
  },
  menu:{
    justifyContent: 'center',
    marginHorizontal: 16,
  },


});


export default Inicio;
