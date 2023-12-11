import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Inicio: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Componente Início</Text>
      {/* Adicione aqui o conteúdo do componente Início */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Inicio;
