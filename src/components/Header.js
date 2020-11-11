import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Todoist</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderColor: '#63dbfb',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#63dbfb',
  },
});

export default Header;
