import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Home from './src/telas/Home';


function App(): React.JSX.Element {
  return (
    <ScrollView style={estilosInicio.container}>
     <Home/>
    </ScrollView>
  );
}

const estilosInicio = StyleSheet.create({
  container: {
    backgroundColor: "#3C533C",
    flex: 1,
  },
});

export default App;
