import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <Text style={styles.header}>AccountScreen</Text>
      <Spacer>
        <Button title='Signout' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 48,
    marginLeft: 15,
  }
});

export default AccountScreen;
