import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

const menuItems = [
  { id: '1', name: 'Spaghetti Bolognese', description: 'Classic Italian pasta dish', price: 12.99, course: 'Main' },
  { id: '2', name: 'Caesar Salad', description: 'Crispy salad with Caesar dressing', price: 8.49, course: 'Starter' },
  { id: '3', name: 'Chocolate Cake', description: 'Rich and creamy chocolate cake', price: 6.99, course: 'Dessert' },
  { id: '4', name: 'Grilled Chicken', description: 'Tender grilled chicken with herbs', price: 15.99, course: 'Main' },
  { id: '5', name: 'Tomato Soup', description: 'Freshly made creamy tomato soup', price: 5.99, course: 'Starter' },
  { id: '6', name: 'Tiramisu', description: 'Classic Italian dessert with mascarpone', price: 7.49, course: 'Dessert' },
]

const Menu = ({ navigation, route }) => {
  const [selectedMeals, setSelectedMeals] = useState([])
  const [consumerCart, setConsumerCart] = useState([])
  
  // Get user role (e.g., 'chef' or 'consumer') from route params or context
  const userRole = route.params?.role || 'consumer' // For demonstration, default is 'consumer'

  // Add meal to the Chef's Menu
  const addMealToChefMenu = (meal) => {
    // Just an example of adding a meal for the chef
    setSelectedMeals((prev) => [...prev, meal])
  }

  // Add meal to the Consumer's Cart
  const addMealToConsumerCart = (meal) => {
    setConsumerCart((prev) => [...prev, meal])
  }

  // Calculate total for consumer cart
  const getTotalPrice = () => {
    return consumerCart.reduce((total, meal) => total + meal.price, 0).toFixed(2)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Menu</Text>

      {/* Menu Items */}
      {menuItems.map(item => (
        <View key={item.id} style={styles.menuItem}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>

          {/* Add to Chef's Menu (Only if user is Chef) */}
          {userRole === 'chef' ? (
            <TouchableOpacity style={styles.addButton} onPress={() => addMealToChefMenu(item)}>
              <Text style={styles.addButtonText}>Add to Chef's Menu</Text>
            </TouchableOpacity>
          ) : (
            // Add to Consumer's Cart (Only if user is Consumer)
            <TouchableOpacity style={styles.addButton} onPress={() => addMealToConsumerCart(item)}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}

      {/* Navigate to the Chef's Menu Management or Consumer's Cart */}
      <TouchableOpacity
        style={styles.manageMenuButton}
        onPress={() => 
          userRole === 'chef' 
          ? navigation.navigate('ChefMenuManagement', { selectedMeals }) 
          : navigation.navigate('ConsumerCart', { consumerCart, totalPrice: getTotalPrice() })
        }
      >
        <Text style={styles.manageMenuButtonText}>
          {userRole === 'chef' ? 'Manage Chef\'s Menu' : 'Go to Cart'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6200ea',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#03a9f4',
    textAlign: 'right',
  },
  addButton: {
    backgroundColor: '#03a9f4',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  manageMenuButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  manageMenuButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
})

export default Menu
