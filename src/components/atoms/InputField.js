import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 12px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  padding-left: 8px;
`;

const InputField = ({ icon, ...props }) => {
  return (
    <Container>
      {icon}
      <StyledTextInput {...props} />
    </Container>
  );
};

export default InputField;