import React from 'react';
import InputField from "../atoms/InputField"
import Button from '../atoms/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const LoginForm = ({ email, setEmail, password, setPassword, onSubmit }) => {

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});