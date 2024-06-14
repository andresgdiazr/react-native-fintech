import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Platform } from 'react-native';

const ThirdStep = ({ nextStep, handleInput, form }) => {
  const [formErrors, setFormErrors] = useState({
    blankNumero: false,
    blankDireccion: false,
    errorNumero: false,
  });

  const { blankNumero, blankDireccion, errorNumero } = formErrors;

  const handleSubmit = () => {
    const regex = /^[0-9]+$/;
    const newErrors = {
      errorNumero: form.numero === '' ? false : !regex.test(form.numero),
      blankNumero: form.numero === '',
      blankDireccion: form.direccion === '',
    };

    setFormErrors(newErrors);

    if (newErrors.errorNumero) {
      handleInput({ name: 'numero', value: '' });
    }

    if (Object.values(newErrors).every(error => !error)) {
      nextStep();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerForms}>
        <Text style={styles.title}>Información personal</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número de teléfono</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.textInput, styles.prefixInput]}
              placeholder='+58'
              editable={false}
            />
            <TextInput
              style={[styles.textInput, styles.mainInput]}
              onChangeText={(text) => handleInput({ name: 'numero', value: text })}
              value={form.numero}
              keyboardType='numeric'
            />
          </View>
          {errorNumero && <Text style={styles.error}>Solo se aceptan números</Text>}
          {blankNumero && <Text style={styles.error}>Completa este campo</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Dirección</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => handleInput({ name: 'direccion', value: text })}
            value={form.direccion}
            placeholder='Ingresa tu dirección'
          />
          {blankDireccion && <Text style={styles.error}>Completa este campo</Text>}
        </View>

        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </Pressable>
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
    marginBottom: Platform.OS === 'web' ? '3rem' : 34,
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
  prefixInput: {
    flex: 1,
    marginRight: 8,
    textAlign: 'center',
  },
  mainInput: {
    flex: 3,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: Platform.OS === 'web' ? '0.5rem' : 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'web' ? '1rem' : 16,
  },
  error: {
    color: 'red',
    marginTop: 5,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ThirdStep;
