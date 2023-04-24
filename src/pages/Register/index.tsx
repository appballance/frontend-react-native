import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Button from '../../components/elements/Button';
import Typography from '../../components/elements/Typography';
import { theme } from '../../commons/styles/theme';

const Register = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Typography
        color={theme.palette.colors.black.main}
        margin="10"
        fsize="100">
        Cadastro
      </Typography>
      <Button size="medium">
        <Text>index </Text>
      </Button>
    </SafeAreaView>
  );
};

export default Register;
