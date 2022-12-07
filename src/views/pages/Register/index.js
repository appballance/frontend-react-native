import React from 'react';
import { Formik } from 'formik';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

import { Header, PageTitle, ContentPageTitle } from './RegisterStyle';

import Button from '../../Components/Button';

import { createUser } from 'infrastructure/services/users';

import { formModel } from './formModel';
import { validationSchema } from './validationSchema';
import { Typography } from 'views/Components/Typography';

export const Register = () => {
  const { surname, fullname, email, password1, password2 } =
    formModel.formFields;

  const onSubmit = async (values) => {
    const response = await createUser(values);
    console.log(response);
  };

  const hasErrorInLeftOfInput = (errors, fieldname, values) =>
    !!errors[fieldname] && values[fieldname] === null;

  return (
    <Formik
      initialValues={{
        [surname.name]: '',
        [fullname.name]: '',
        [email.name]: '',
        [password1.name]: '',
        [password2.name]: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
      validateOnBlur>
      {({
        handleChange,
        handleSubmit,
        values,
        isValid,
        isSubmitting,
        errors,
        setFieldValue,
      }) => (
        <Header>
          <TextInput
            label={surname.label}
            placeholder={surname.placeholder}
            placeholderTextColor={styles.backgroundInput.color}
            style={styles.backgroundInput}
            onBlur={(e) => {
              setFieldValue(surname.name, values[surname.name] || null);
            }}
            onChangeText={handleChange(surname.name)}
            value={values[surname.name]}
            error={hasErrorInLeftOfInput(errors, surname.name, values)}
          />
          <TextInput
            label={fullname.label}
            placeholder={fullname.placeholder}
            placeholderTextColor={styles.backgroundInput.color}
            style={styles.backgroundInput}
            onBlur={() =>
              setFieldValue(fullname.name, values[fullname.name] || null)
            }
            onChangeText={handleChange(fullname.name)}
            value={values[fullname.name]}
            error={hasErrorInLeftOfInput(errors, fullname.name, values)}
          />
          <TextInput
            label={email.label}
            placeholder={email.placeholder}
            placeholderTextColor={styles.backgroundInput.color}
            style={styles.backgroundInput}
            onBlur={() => setFieldValue(email.name, values[email.name] || null)}
            onChangeText={handleChange(email.name)}
            value={values[email.name]}
            error={hasErrorInLeftOfInput(errors, email.name, values)}
          />
          <TextInput
            label={password1.label}
            placeholder={password1.placeholder}
            placeholderTextColor={styles.backgroundInput.color}
            style={styles.backgroundInput}
            onBlur={() =>
              setFieldValue(password1.name, values[password1.name] || null)
            }
            onChangeText={handleChange(password1.name)}
            value={values[password1.name]}
            error={hasErrorInLeftOfInput(errors, password1.name, values)}
            secureTextEntry
          />
          <TextInput
            label={password2.label}
            placeholder={password2.placeholder}
            placeholderTextColor={styles.backgroundInput.color}
            style={styles.backgroundInput}
            onBlur={() =>
              setFieldValue(password2.name, values[password2.name] || null)
            }
            onChangeText={handleChange(password2.name)}
            value={values[password2.name]}
            error={hasErrorInLeftOfInput(errors, password2.name, values)}
            secureTextEntry
          />
          <Button onPress={handleSubmit}>Cadastrar</Button>
        </Header>
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
