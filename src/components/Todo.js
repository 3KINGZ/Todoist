import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

function Todo({todo, onDelete}) {
  return (
    <View style={styles.containerStyle}>
      <View>
        <Text style={styles.textStyle}>{todo}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onDelete}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingBottom: 4,
    paddingLeft: 3,
    paddingRight: 3,
  },
  textContainerStyle: {
    flex: 2,
  },
  textStyle: {
    fontSize: 25,
    color: '#9fa6ac',
  },
  imageStyle: {
    height: 35,
    resizeMode: 'cover',
    width: 30,
  },
});

export default Todo;
