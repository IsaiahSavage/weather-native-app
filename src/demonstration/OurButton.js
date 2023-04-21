import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const OurButon = () => {
  const onPress = () => {
    console.log('Button pressed');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>Hello</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 5,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
  },
});

export default OurButton;
