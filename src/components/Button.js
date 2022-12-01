import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Button({onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370f7',
    padding: 15,
    marginTop: 20,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
