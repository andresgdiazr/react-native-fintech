import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CommonStyles from '../atoms/CommonStyles';

const HomeBar = ({height}) => {
  //TODO solicitar nombre de usuario
  const userName = 'Mago Magico'

  return( 
    <View style={[CommonStyles.barContainer, {height}]}>
      <Text style = {CommonStyles.barTitle}>Bienvenido, {userName}</Text>
    </View>
  );
};

export default HomeBar;
