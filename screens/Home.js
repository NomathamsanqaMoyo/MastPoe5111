import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Home = () => {
  const navigation = useNavigation()

  // Function to handle navigation based on button press
  const navigateTo = (screen) => {
    navigation.navigate(screen)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the App</Text>

      {/* Chef Login Button */}
      <TouchableOpacity
        style={[styles.button, styles.chefButton]}
        onPress={() => navigateTo('Login')} // Replace 'ChefLogin' with the actual screen name
      >
        <Icon name="restaurant" size={30} color="#fff" />
        <Text style={styles.buttonText}>Chef Login</Text>
      </TouchableOpacity>

      {/* View Menu Button */}
      <TouchableOpacity
        style={[styles.button, styles.menuButton]}
        onPress={() => navigateTo('Menu')} // Replace 'Menu' with the actual screen name
      >
        <Icon name="menu-book" size={30} color="#fff" />
        <Text style={styles.buttonText}>View Menu</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#6200ea',
  },
  button: {
    width: '80%',
    height: 60,
    borderRadius: 10,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  chefButton: {
    backgroundColor: '#6200ea',
  },
  menuButton: {
    backgroundColor: '#03a9f4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
})

export default Home
