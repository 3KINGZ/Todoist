import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Todoist</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    paddingTop: 3,
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderColor: '#63dbfb',
  },
  textStyle: {
    fontSize: 30,
    fontweight: 'bold',
    textAlign: 'center',
    color: '#63dbfb',
  },
};

export default Header;
