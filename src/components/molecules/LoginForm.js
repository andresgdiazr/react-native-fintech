import React from 'react';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginForm = ({ email, setEmail, password, setPassword, onSubmit }) => {
  return (
    <>
      <InputField
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onPress={onSubmit}>Iniciar sesión</Button>
    </>
  );
};

export default LoginForm;