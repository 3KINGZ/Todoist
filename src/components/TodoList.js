import React from 'react';
import {View, ScrollView, FlatList, Text, Button} from 'react-native';
import Todo from './Todo';
import ClearAllBtn from '../components/ClearAllBtn';

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
        ItemSeparatorComponent={() => (
          <View style={{borderColor: '#606871', borderBottomWidth: 2}} />
        )}
        keyExtractor={(message, index) => index.toString()}
      />
    </ScrollView>
  );
}

const styles = {
  container: {
    marginTop: 25,
    borderTopWidth: 3,
    height: '60%',
    borderColor: '#606871',
  },
};

{
  /* <View style={styles.containerStyle}>
  {todos.map((todo) => (
    <Todo todo={todo.todo} key={todo.id} onDelete={() => onDelete(todo.id)} />
  ))}
</View>; */
}
