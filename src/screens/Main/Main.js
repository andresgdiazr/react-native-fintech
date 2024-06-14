import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Platform } from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/imagen.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>
        Facilitando tus pagos, {'\n'} Asegurando tu éxito
      </Text>
      <Pressable style={styles.button} onPress={() => alert('Iniciar sesión')}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.registerButton]} onPress={() => alert('Registrarse')}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'web' ? '5%' : 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300, // Ajusta el tamaño de la imagen según tus necesidades
    height: 300,
    marginBottom: Platform.OS === 'web' ? '3rem' : 34,
  },
  title: {
    fontSize: Platform.OS === 'web' ? '2rem' : 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Platform.OS === 'web' ? '2rem' : 20,
    color: '#000', // Cambia el color según tus necesidades
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: Platform.OS === 'web' ? '0.5rem' : 12,
    paddingHorizontal: Platform.OS === 'web' ? '1.5rem' : 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    width: '80%', // Ajusta el ancho según tus necesidades
  },
  registerButton: {
    backgroundColor: '#218838',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'web' ? '1rem' : 16,
  },
});

export default Main;