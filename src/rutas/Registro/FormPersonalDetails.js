import React from 'react';
import { View, Text, TextInput, Button } from 'react-native'; // Importa los componentes necesarios

const FormPersonalDetails = ({ nextStep, previousStep, handleInput, form }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Información personal
      </Text>
      <TextInput
        placeholder="Texto"
        onChangeText={(text) => handleInput('personalDetails', text)}
        value={form.personalDetails} // Asegúrate de que esto coincida con tu estado
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: 8,
          marginBottom: 16,
          width: '80%',
        }}
      />
      {/* Agrega más campos de detalles personales aquí si es necesario */}
      <Button title="Atrás" onPress={previousStep} />
      <Button title="Siguiente" onPress={nextStep} />
    </View>
  );
};

export default FormPersonalDetails;
