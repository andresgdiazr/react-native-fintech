import React, { useState } from 'react';
import { View, Pressable, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar la lógica de inicio de sesión
    console.log('Iniciando sesión con correo electrónico:', email, 'y contraseña:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerforms}>
        <Text style={styles.title}>Hola, bienvenido!</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            placeholder='Ingresa tu e-mail'
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder='Ingresa tu contraseña'
          />
        </View>

        <View style={styles.buttonContainer}>
          <Pressable onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
        <Pressable>
          <Text style={styles.registerButton}>Regístrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'web' ? '10%' : width * 0.1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  containerforms: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: Platform.OS === 'web' ? '2rem' : width * 0.07,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Platform.OS === 'web' ? '3rem' : height * 0.085,
  },
  inputContainer: {
    marginBottom: Platform.OS === 'web' ? '1.5rem' : height * 0.04,
  },
  label: {
    fontSize: Platform.OS === 'web' ? '1rem' : width * 0.04,
    marginBottom: Platform.OS === 'web' ? '0.5rem' : height * 0.01,
    fontWeight: '600',
    opacity: 0.8,
  },
  textInput: {
    height: Platform.OS === 'web' ? '2rem' : height * 0.06,
    padding: Platform.OS === 'web' ? '0.5rem' : width * 0.04,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    opacity: 0.8,
  },
  buttonContainer: {
    marginTop: Platform.OS === 'web' ? '1.5rem' : height * 0.03,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: Platform.OS === 'web' ? '0.5rem' : height * 0.02,
    paddingHorizontal: Platform.OS === 'web' ? '1rem' : width * 0.1,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: Platform.OS === 'web' ? '1rem' : width * 0.04,
    fontWeight: 'bold',
  },
  registerContainer: {
    marginTop: Platform.OS === 'web' ? '1.5rem' : height * 0.03,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: Platform.OS === 'web' ? '1rem' : width * 0.04,
    color: '#aaa',
  },
  registerButton: {
    marginLeft: 5,
    fontSize: Platform.OS === 'web' ? '1rem' : width * 0.04,
    color: '#007BFF',
  },
});


export default LoginScreen;
