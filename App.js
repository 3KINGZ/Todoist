import React, {useState, useEffect} from 'react';
import {
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Header from './src/components/Header';
import DateContainer from './src/components/DateContainer';
import TaskNumber from './src/components/TaskNumber';
import Input from './src/components/Input';
import TodoList from './src/components/TodoList';
import {LogBox} from 'react-native';
import ClearAllBtn from './src/components/ClearAllBtn';

function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const [todos, setTodos] = useState([
    {id: Math.floor(Math.random() * 1000), todo: 'learn more'},
    {id: Math.floor(Math.random() * 1000), todo: 'watch movie'},
    {id: Math.floor(Math.random() * 1000), todo: 'code'},
  ]);
  const [todo, setTodo] = useState('');

  function addTodo() {
    if (todo) {
      setTodos([
        ...todos,
        {
          id: `${todo}-${Math.floor(Math.random() * todo.length)}`,
          todo,
        },
      ]);
      setTodo('');
    }
  }

  function deleteTodo(id) {
    setTodos(todos.filter((td, index) => index !== id));
  }

  function clearAll() {
    setTodos([]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <View style={styles.dateContainer}>
          <DateContainer />
          <TaskNumber numberOfTasks={todos.length} />
        </View>
        <Input
          onChange={(text) => setTodo(text)}
          onPress={addTodo}
          value={todo}
        />
        <TodoList todos={todos} onDelete={deleteTodo} />
        <ClearAllBtn clearAll={clearAll} todos={todos} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b3c4b',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  mainContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  dateContainer: {
    paddingTop: 8,
  },
});

export default App;
