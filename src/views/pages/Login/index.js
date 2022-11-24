import React from 'react';
import { Formik } from 'formik';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View, Button } from 'react-native';

// import { createUser } from 'infrastructure/services/users';

export const Login = () => {
  const onSubmit = async (values) => {
    console.log('values::', values);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}>
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <View>
          <TextInput
            placeholder="Digite aqui..."
            placeholderTextColor={styles.backgroundInput.color}
            style={styles.backgroundInput}
            onChangeText={handleChange('surname')}
            onBlur={handleBlur('surname')}
            value={values.surname}
          />
          <TextInput
            placeholder="Digite aqui..."
            placeholderTextColor={styles.backgroundInput.color}
            style={styles.backgroundInput}
            onChangeText={handleChange('fullname')}
            onBlur={handleBlur('fullname')}
            value={values.fullname}
            secureTextEntry
          />
          <Button onPress={handleSubmit} title="Entrar" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  backgroundInput: {
    backgroundColor: '#FFFF',
    margin: 10,
    color: '#000',
  },
});
