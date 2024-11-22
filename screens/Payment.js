import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

// Sample data for the order
const orderItems = [
  { id: '1', name: 'Spaghetti Bolognese', price: 12.99, quantity: 2 },
  { id: '2', name: 'Caesar Salad', price: 8.49, quantity: 1 },
  { id: '3', name: 'Chocolate Cake', price: 6.99, quantity: 1 },
]

const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
}

const calculateAveragePrice = (items) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (totalPrice / totalItems).toFixed(2)
}

const Payment = () => {
  const total = calculateTotal(orderItems)
  const averagePrice = calculateAveragePrice(orderItems)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Order Summary</Text>

      {/* Order List */}
      <View style={styles.orderSummaryContainer}>
        {orderItems.map(item => (
          <View key={item.id} style={styles.orderItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>x{item.quantity} - ${item.price.toFixed(2)}</Text>
            <Text style={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        ))}
      </View>

      {/* Average Price */}
      <View style={styles.averagePriceContainer}>
        <Text style={styles.averagePriceText}>Average Price per Item: ${averagePrice}</Text>
      </View>

      {/* Total Price */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalPrice}>${total}</Text>
      </View>

      {/* Payment Button */}
      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentButtonText}>Confirm Payment</Text>
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
  orderSummaryContainer: {
    marginBottom: 30,
  },
  orderItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDetails: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#03a9f4',
    textAlign: 'right',
  },
  averagePriceContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 20,
  },
  averagePriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ea',
    textAlign: 'center',
  },
  totalContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ea',
  },
  paymentButton: {
    backgroundColor: '#03a9f4',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  paymentButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
})

export default Payment
