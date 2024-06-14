import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Platform } from 'react-native';
import ButtonCustomize from '../../../Components/ButtomCustomize';

const ThirdStep = ({ nextStep, handleInput, form }) => {
  const handleLogin = () => {
    console.log('Iniciando sesión con correo electrónico:', email, 'y contraseña:', password);
  };

  const Col = ({ numRows, children }) => {
    return <View style={styles[`${numRows}col`]}>{children}</View>;
  };

  const Row = ({ children }) => <View style={styles.row}>{children}</View>;

  return (
    <View style={styles.container}>
      <View style={styles.containerForms}>
        <Text style={styles.title}>Información personal</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número de teléfono</Text>
          <Row>
            <Col numRows={1}>
              <TextInput
                style={styles.textInput}
                placeholder='+58'
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                editable={false}
              />
            </Col>
            <Col numRows={3}>
              <TextInput
                style={styles.textInput}
                value={form.numero}
                placeholder='Ingresa tu número de teléfono'
                onChangeText={(text) => handleInput('numero', text)}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </Col>
          </Row>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Dirección</Text>
          <TextInput
            style={styles.textInput}
            value={form.direccion}
            placeholder='Ingresa tu dirección'
            onChangeText={(text) => handleInput('direccion', text)}
            autoCapitalize="none"
            keyboardType="email-address"
            editable={false}
          />
        </View>

        <ButtonCustomize title="Continuar" Press={handleLogin} />
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
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  '1col': {
    flex: 1,
  },
  '2col': {
    flex: 2,
  },
  '3col': {
    flex: 3,
  },
  '4col': {
    flex: 4,
  },
});

export default ThirdStep;
