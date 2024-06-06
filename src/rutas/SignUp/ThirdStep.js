import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import ButtonCustomize from '../atoms/NewButton';
import Icon from 'react-native-vector-icons/FontAwesome'; 
const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState('');

  const handleLogin = () => {
    // Implementar la lógica de inicio de sesión
    console.log('Iniciando sesión con correo electrónico:', email, 'y contraseña:', password);
  };

  
  const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }
  
  const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )
  
  return (
    <View style={styles.container}>
    <Icon name="chevron-left" size={0.1*width} color="#000" /> 
    
    <View style={styles.containerforms}>
    
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
          value={email}
          placeholder='Ingresa tu número de teléfono'
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        </Col>
      </Row>

        

        
    </View>

    <View style={styles.inputContainer}>
        <Text style={styles.label}>Dirección</Text>
        
        <View>
        
        <TextInput
          style={styles.textInput}
          value={email}
          placeholder='Ingresa tu dirección'
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
          editable={false}
        />
        </View>

        

        
    </View>


      <ButtonCustomize title="Continuar" Press={handleLogin}/>
      
      
    </View> 

     
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity>
          <Text style={styles.registerButton}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  containerforms:{
    flex:1,
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.085,
  },
  inputContainer: {
    marginBottom: height * 0.04,
  },
  label: {
    fontSize: width * 0.04,
    marginBottom: height * 0.01,
    fontWeight: '600',
    opacity: 0.8,
  },
  textInput: {
    height: height * 0.06,
    padding: width * 0.04,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    opacity: 0.8,
  },
  registerContainer: {
    marginTop: height * 0.03,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: width * 0.04,
    color: '#aaa',
  },
  registerButton: {
    marginLeft: 5,
    fontSize: width * 0.04,
    color: '#00f',
  },
  row: {
        justifyContent: 'space-between',
        flexDirection: "row",

     
  },
  "1col":  {
    flex:  1
  },
  "2col":  {
    flex:  2
  },
  "3col":  {
    flex:  3
  },
  "4col":  {
    flex:  4
  }
});

export default LoginScreen;
