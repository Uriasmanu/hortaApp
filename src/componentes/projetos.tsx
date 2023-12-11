import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Projetos: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Projetos Component</Text>
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

export default Projetos;
