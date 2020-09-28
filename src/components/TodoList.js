import React from 'react';
import {View, ScrollView} from 'react-native';
import Todo from './Todo';

export default function TodoList({todos, onDelete}) {
  return (
    <ScrollView>
      <View style={styles.containerStyle}>
        {todos.map((todo) => (
          <Todo
            todo={todo.todo}
            key={todo.id}
            onDelete={() => onDelete(todo.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = {
  containerStyle: {
    marginTop: 25,
    borderTopWidth: 3,
    borderColor: '#606871',
  },
};
