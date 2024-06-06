import React, { useState } from 'react';
import styled from 'styled-components/native';
import LoginForm from '../molecules/LoginForm';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 20px;
`;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container>
      <Title>Hola, Bienvenido!</Title>
      
    </Container>
  );
};

export default LoginScreen;
