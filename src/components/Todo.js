import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

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

const styles = {
  containerStyle: {
    flexDirection: 'row',
    borderColor: '#606871',
    borderBottomWidth: 2,
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
};
export default Todo;
