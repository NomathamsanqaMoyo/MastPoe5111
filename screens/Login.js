import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native'


const Login = ({navigation}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Handle login action for staff/chef or consumer
  const handleLogin = (role) => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.')
      return
    }

    // Here, you can handle the authentication logic based on the role
    Alert.alert(`${role} Login`, `Logged in as ${role} with email: ${email}`);

    
    
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.formContainer}>
        <Text style={styles.header}>Welcome to the App</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={[styles.loginButton, styles.staffButton]}
          onPress={()=> navigation.navigate('ChefsMenu')}
        >
          <Text style={styles.buttonText}>Login as Staff/Chef</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginButton, styles.consumerButton]}
          onPress={() => handleLogin('Consumer')}
        >
          <Text style={styles.buttonText}>Login as Consumer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
  loginButton: {
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  staffButton: {
    backgroundColor: '#6200ea',
  },
  consumerButton: {
    backgroundColor: '#03a9f4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Login
