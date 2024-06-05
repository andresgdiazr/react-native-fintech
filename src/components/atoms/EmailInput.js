import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const EmailInput = ({ value, onChange }) => (
    <TextInput
        style={styles.input}
        placeholder="Ingresa tu e-mail"
        value={value}
        onChangeText={onChange}
        keyboardType="email-address"
        autoCapitalize="none"
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

export default EmailInput;
