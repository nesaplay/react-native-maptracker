import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input label="Email" />
      </Spacer>
      <Spacer>
        <Input label="Password" />
      </Spacer>
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>

      {/* <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')} /> */}
      {/* <Button title="Go to mainFlow" onPress={() => navigation.navigate('mainFlow')} /> */}
    </View>
  );
};

SignupScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  }
});

export default SignupScreen;
