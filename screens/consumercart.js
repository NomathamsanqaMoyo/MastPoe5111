import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

const ConsumerCart = ({ route, navigation }) => {
  const { consumerCart, totalPrice } = route.params

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Your Cart</Text>

      {/* Display Cart Items */}
      {consumerCart.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        consumerCart.map((meal, index) => (
          <View key={index} style={styles.cartItem}>
            <Text style={styles.itemName}>{meal.name}</Text>
            <Text style={styles.itemPrice}>${meal.price.toFixed(2)}</Text>
          </View>
        ))
      )}

      {/* Total Price */}
      <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>

      {/* Navigate to Payment Page */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('Payment', { totalPrice })}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
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
  cartItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
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
  itemPrice: {
    fontSize: 16,
    color: '#03a9f4',
    marginTop: 5,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ea',
    textAlign: 'right',
    marginVertical: 20,
  },
  checkoutButton: {
    backgroundColor: '#03a9f4',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  emptyCartText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
})

export default ConsumerCart
