import React from 'react';
import { Button, StyleSheet } from 'react-native-web';

const ButtonCustomize = ({ onPress, children, title, Press }) => {
  return (
    <>
      <Button title={title} style={StyleSheet.loginButton} 
      onPress={Press} color={"#2ECC71"} />
    </>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '2ECC71',
    borderRadius: 5,
    fontsize:12,
  },
});

export default ButtonCustomize;


