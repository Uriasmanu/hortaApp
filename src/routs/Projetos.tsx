// Projetos.tsx
import React from 'react';
import { StyleSheet, View, Text, Image,  Touchable } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TextosInicio } from '../mocks/textos';
import { TouchableOpacity } from 'react-native-gesture-handler';

type RootDrawerParamList = {
  Home: undefined;
  Notifications: undefined;
};

type BaseProps = {
  // Outras propriedades necessárias para Projetos podem ser adicionadas aqui
};

type ProjetosProps = BaseProps & {
  navigation?: DrawerNavigationProp<RootDrawerParamList, 'Notifications'>;
};

export function Projetos({ navigation }: ProjetosProps) {
  const handleButtonPress = () => {
    // Adicione a lógica desejada que deve ocorrer quando o botão é pressionado
    console.log("Botão pressionado!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{TextosInicio.subtitulo}</Text>

      <View style={styles.card}>
        <Image source={require('../../assets/Imagens/medicinal.png')} style={styles.imagem} />
        <Text style={styles.tituloCard} >{TextosInicio.tituloCard}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotoa}>{TextosInicio.saibaMais}</Text>
        </TouchableOpacity>
       
       
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/Imagens/sopao.png')} style={styles.imagem} />
        <Text style={styles.tituloCard} >{TextosInicio.tituloCard2}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotoa}>{TextosInicio.saibaMais}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/Imagens/criancas.png')} style={styles.imagem} />
        <Text style={styles.tituloCard} >{TextosInicio.tituloCard3}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotoa}>{TextosInicio.saibaMais}</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titulo: {
    width: '90%',
    fontSize: 23,
    color: "#fff",
    fontWeight: "bold",
    
  },
  card:{
    backgroundColor: '#fff',
    width: "95%",
    height: 390,
    padding: 4,
    justifyContent:'center',
    marginVertical: 10,
   
  },
  imagem: {
    width: "100%",
    height: "83%",
    
  },
  tituloCard:{
    width: '90%',
    fontSize: 18,
    color: "#3C533C",
    marginVertical: 5,
  },
  botao:{
    width: "100%",
    height: 30,
    backgroundColor: '#fed',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor:'#000',
    borderWidth: 1,
    padding: 3
    
  },
  textoBotoa:{
    color: '#3C533C',
    fontSize: 16,
    
  },
});

export default Projetos;
