import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 12px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const Button = ({ onPress, children }) => {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;