import React from 'react';

import {StyleSheet, View, Button} from 'react-native';

import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';

import {createUser} from '../../services/users';

const Register = () => {
  return (
    <Formik
      initialValues={{
        surname: '',
        fullname: '',
        email: '',
        password1: '',
        password2: '',
      }}
      onSubmit={values => {
        const user = createUser(values);
        console.log('user', user);
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <TextInput
            placeholder="Digite aqui..."
            placeholderTextColor="#000"
            style={styles.backgroundInput}
            onChangeText={handleChange('surname')}
            onBlur={handleBlur('surname')}
            value={values.surname}
          />
          <TextInput
            placeholder="Digite aqui..."
            placeholderTextColor="#000"
            style={styles.backgroundInput}
            onChangeText={handleChange('fullname')}
            onBlur={handleBlur('fullname')}
            value={values.fullname}
          />
          <TextInput
            placeholder="Digite aqui..."
            placeholderTextColor="#000"
            style={styles.backgroundInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <TextInput
            placeholder="Digite aqui..."
            placeholderTextColor="#000"
            style={styles.backgroundInput}
            onChangeText={handleChange('password1')}
            onBlur={handleBlur('password1')}
            value={values.password1}
          />
          <TextInput
            placeholder="Digite aqui..."
            placeholderTextColor="#000"
            style={styles.backgroundInput}
            onChangeText={handleChange('password2')}
            onBlur={handleBlur('password2')}
            value={values.password2}
          />
          <Button onPress={handleSubmit} title="Submit" />
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

export default Register;
