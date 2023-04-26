import { SafeAreaView } from 'react-native';
import React from 'react';
import Typography from '../../components/elements/Typography';
import Button from '../../components/elements/Button';

const Register = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Typography color="red" fontSize="50px" margin="0">
        Cadastro
      </Typography>
      <Button width="100px" height="30px">
        cadastrar
      </Button>
      <Typography>Olá pessoas</Typography>
    </SafeAreaView>
  );
};

export default Register;
