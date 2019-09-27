import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input label='Email' value={email} onChangeText={setEmail} autoCapitalize='none' autoCorrect={false} />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          label='Password'
          value={password}
          onChangeText={setPassword}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </Spacer>
      {errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <Button title={submitText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
  },
});

export default AuthForm;
