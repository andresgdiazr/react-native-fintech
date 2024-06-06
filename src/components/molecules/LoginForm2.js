import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import EmailInput from '../atoms/EmailInput';
import PasswordInput from '../atoms/PasswordInput';
import SubmitButton from '../atoms/SubmitButton.js';

const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback(() => {
        onSubmit({ email, password });
    }, [email, password, onSubmit]);

    return (
        <View style={styles.form}>
            <EmailInput value={email} onChange={setEmail} />
            <PasswordInput value={password} onChange={setPassword} />
            <SubmitButton title="Iniciar sesión" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        width: '100%',
        padding: 16,
    },
});

export default LoginForm;