/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export function SKillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSkill: {
    padding: 15,
    backgroundColor: '#1f1e25',
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
});
