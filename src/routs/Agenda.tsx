import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TextosAgenda } from '../mocks/textos';
import { ScrollView } from 'react-native-gesture-handler';

type RootDrawerParamList = {
  Home: undefined;
  Notifications: undefined;
};

type NotificationsScreenProps = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Notifications'>;
};

export function Agenda({ navigation }: NotificationsScreenProps) {
  return (
    <ScrollView >
      <Text>{TextosAgenda.titulo}</Text>

      <View>

        <View>
          <View>
            <Image source={require('../../assets/Imagens/planta.png')} />
            <Text>{TextosAgenda.segunda}</Text>
          </View>
          <Text>{TextosAgenda.cultivo}</Text>
        </View>

        <View>
          <View>
            <Image source={require('../../assets/Imagens/venda.png')} />
            <Text>{TextosAgenda.terca}</Text>
          </View>
          <Text>{TextosAgenda.venda}</Text>
        </View>

        <View>
          <View>
            <Image source={require('../../assets/Imagens/sopa.png')} />
            <Text>{TextosAgenda.quarta}</Text>
          </View>
          <Text>{TextosAgenda.sopao}</Text>
        </View>

        <View>
          <View>
            <Image source={require('../../assets/Imagens/pao.png')} />
            <Text>{TextosAgenda.quinta}</Text>
          </View>
          <Text>{TextosAgenda.pao}</Text>
        </View>

        <View>
          <View>
            <Image source={require('../../assets/Imagens/familia.png')} />
            <Text>{TextosAgenda.sabado}</Text>
          </View>
          <Text>{TextosAgenda.semando}</Text>
        </View>

        <View>
          <View>
            <Image source={require('../../assets/Imagens/cultivo.png')} />
            <Text>{TextosAgenda.domingo}</Text>
          </View>
          <Text>{TextosAgenda.trabalho}</Text>
        </View>

      </View>
    </ScrollView>
  );
}