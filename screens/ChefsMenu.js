import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

const ChefMenuManagement = ({ route, navigation }) => {
  const { selectedMeals } = route.params

  const removeMeal = (mealId) => {
    // Remove the selected meal from the list by filtering out the meal based on its ID
    const updatedMeals = selectedMeals.filter(meal => meal.id !== mealId)
    navigation.replace('ChefMenuManagement', { selectedMeals: updatedMeals })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Chef's Selected Menu</Text>

      {/* Display the selected meals */}
      {selectedMeals.length === 0 ? (
        <Text style={styles.noMealsText}>No meals selected yet.</Text>
      ) : (
        selectedMeals.map(meal => (
          <View key={meal.id} style={styles.menuItem}>
            <Text style={styles.itemName}>{meal.name}</Text>
            <Text style={styles.itemDescription}>{meal.description}</Text>
            <Text style={styles.itemPrice}>${meal.price.toFixed(2)}</Text>

            {/* Remove Meal Button */}
            <TouchableOpacity style={styles.removeButton} onPress={() => removeMeal(meal.id)}>
              <Text style={styles.removeButtonText}>Remove from Menu</Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      {/* Navigate back to the Menu page */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.backButtonText}>Back to Menu</Text>
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
  removeButton: {
    backgroundColor: '#f44336',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  removeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  noMealsText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
})

export default ChefMenuManagement
