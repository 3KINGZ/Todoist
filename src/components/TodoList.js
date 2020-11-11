import React from 'react';
import {View, ScrollView, FlatList, StyleSheet} from 'react-native';
import Todo from './Todo';

export default function TodoList({todos, onDelete}) {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={todos}
        ListHeaderComponent={() => <View />}
        renderItem={({item, index}) => (
          <Todo
            key={item.id}
            todo={item.todo}
            onDelete={() => onDelete(index)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={(message, index) => index.toString()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    borderTopWidth: 3,
    height: '60%',
    borderColor: '#606871',
  },
  seperator: {
    borderColor: '#606871',
    borderBottomWidth: 2,
  },
});
