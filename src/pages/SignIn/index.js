import React from 'react';
import { Text } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';

function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>

      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite sua senha"
      />

      <Button>Entrar</Button>
    </Background>
  );
}

export default SignIn;
