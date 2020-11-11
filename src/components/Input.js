import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

function Input({onPress, onChange, value}) {
  return (
    <View style={styles.containerStyle}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter a task..."
        onChangeText={onChange}
        value={value}
      />
      <Button
        onPress={onPress}
        title="Add Task"
        placeHolder="enter todos"
        style={styles.buttonStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyle: {
    backgroundColor: 'white',
    height: 40,
    width: 100,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#d7dadc',
    color: 'red',
  },
});

export default Input;
