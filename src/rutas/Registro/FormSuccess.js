import React from 'react';
import { View, Text } from 'react-native'; // Importa los componentes necesarios

const FormSuccess = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        ¡Formulario enviado exitosamente!
      </Text>
    </View>
  );
};

export default FormSuccess;
