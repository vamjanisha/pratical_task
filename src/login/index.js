import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  StyleSheet,
} from 'react-native';

const login = ({ navigation }) => {
  const [enterName, setEnterName] = useState('');
  const [enterPassword, setEnterPassword] = useState('');

  const onSubmit = () => {
    if (enterName.trim().length < 2) {
      Alert.alert('Validation Error', 'Name must be at least 2 characters long.');
    } else if (/\d/.test(enterName)) {
      Alert.alert('Validation Error', 'Name cannot contain numbers.');
    } else if (enterPassword.trim() === '') {
      Alert.alert('Validation Error', 'Please enter your password.');
    } else {
      Alert.alert('Form Submitted', `Name: ${enterName}\nPassword: ${enterPassword}`);
      navigation.navigate('List');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>User Login</Text>
      </View>
      <Text style={styles.label}>Username</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(name) => setEnterName(name)}
          placeholder="Enter Your Name"
        />
      </View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={enterPassword}
          onChangeText={(password) => setEnterPassword(password)}
          secureTextEntry={true} // Use this to hide the password
        />
      </View>

      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  inputContainer: {
    width: '80%',
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  input: {
    paddingLeft: 10,
  },
});

export default login;
