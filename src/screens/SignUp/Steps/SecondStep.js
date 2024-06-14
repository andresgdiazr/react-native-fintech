import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonCustomize from '../../../Components/ButtomCustomize';

const SecondStep = ({ nextStep, handleInput, form }) => {
  return (
    <View style={styles.container}>
      <Icon name="chevron-left" size={Platform.OS === 'web' ? 40 : 30} color="#000" />

      <View style={styles.containerForms}>
        <Text style={styles.title}>Información personal</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.textInput}
            value={form.nombre}
            placeholder="Ingresa tu nombre"
            onChangeText={(text) => handleInput('nombre', text)}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Apellido</Text>
          <TextInput
            style={styles.textInput}
            value={form.apellido}
            onChangeText={(text) => handleInput('apellido', text)}
            placeholder="Ingresa tu apellido"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Cédula</Text>
          <TextInput
            style={styles.textInput}
            value={form.cedula}
            onChangeText={(text) => handleInput('cedula', text)}
            placeholder="Ingresa tu cédula"
          />
        </View>

        <ButtonCustomize title="Continuar" Press={nextStep} />
      </View>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿Ya tienes una cuenta?</Text>
        <Pressable>
          <Text style={styles.registerButton}>Inicia sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'web' ? '10%' : 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  containerForms: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: Platform.OS === 'web' ? '2rem' : 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Platform.OS === 'web' ? '3rem' : 30,
  },
  inputContainer: {
    marginBottom: Platform.OS === 'web' ? '1.5rem' : 16,
  },
  label: {
    fontSize: Platform.OS === 'web' ? '1rem' : 16,
    marginBottom: Platform.OS === 'web' ? '0.5rem' : 8,
    fontWeight: '600',
    opacity: 0.8,
  },
  textInput: {
    height: Platform.OS === 'web' ? '2rem' : 40,
    padding: Platform.OS === 'web' ? '0.5rem' : 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    opacity: 0.8,
  },
  registerContainer: {
    marginTop: Platform.OS === 'web' ? '1.5rem' : 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: Platform.OS === 'web' ? '1rem' : 16,
    color: '#aaa',
  },
  registerButton: {
    marginLeft: 5,
    fontSize: Platform.OS === 'web' ? '1rem' : 16,
    color: '#00f',
  },
});

export default SecondStep;
