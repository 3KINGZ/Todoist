import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ClearAllBtn = ({clearAll, todos}) => {
  return (
    <>
      {todos.length > 0 ? (
        <TouchableOpacity onPress={clearAll}>
          <View style={styles.container}>
            <Text style={styles.text}>Clear All</Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#63dbfb',
    padding: 3,
    borderRadius: 5,
    marginTop: 10,
    // position: 'absolute',
    bottom: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ClearAllBtn;
