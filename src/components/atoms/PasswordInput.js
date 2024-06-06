import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const PasswordInput = ({ value, onChange }) => (
    <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        value={value}
        onChangeText={onChange}
        secureTextEntry
    />
);

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 12,
        paddingLeft: 8,
    },
});

export default PasswordInput;
