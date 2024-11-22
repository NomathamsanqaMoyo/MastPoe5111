import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker, ScrollView } from 'react-native'

// Reservation component
const Reservation = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [people, setPeople] = useState('1')
  const [specialRequest, setSpecialRequest] = useState('')

  // Handle form submission (you can replace this with actual API call for reservations)
  const handleReserve = () => {
    if (!name || !date || !time) {
      alert('Please fill out all fields.')
      return
    }
    alert(`Reservation confirmed for ${name} on ${date} at ${time} for ${people} people.`)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Make a Reservation</Text>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Date Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />
      </View>

      {/* Time Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Time</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Time (HH:MM)"
          value={time}
          onChangeText={setTime}
        />
      </View>

      {/* Number of People Picker */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of People</Text>
        <Picker
          selectedValue={people}
          style={styles.picker}
          onValueChange={itemValue => setPeople(itemValue)}
        >
          {[...Array(10)].map((_, index) => (
            <Picker.Item key={index} label={`${index + 1}`} value={`${index + 1}`} />
          ))}
        </Picker>
      </View>

      {/* Special Requests Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Special Requests</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Any special requests?"
          value={specialRequest}
          onChangeText={setSpecialRequest}
          multiline
          numberOfLines={4}
        />
      </View>

      {/* Reserve Button */}
      <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
        <Text style={styles.reserveButtonText}>Confirm Reservation</Text>
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
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  picker: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    color: '#333',
  },
  textArea: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top',
  },
  reserveButton: {
    backgroundColor: '#03a9f4',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 5,
  },
  reserveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
})

export default Reservation
