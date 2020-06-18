import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SearchBar = () => {
  return (
    <View style={ styles.background }>
      <Text>Sreach Bar</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  background: {
    backgroundColor: '#efee9d',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
  }
});

export default SearchBar;