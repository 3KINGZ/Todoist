import React, {useState} from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import DateContainer from './src/components/DateContainer';
import TaskNumber from './src/components/TaskNumber';
import Input from './src/components/Input';
import TodoList from './src/components/TodoList';

function App() {
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
    setTodos(todos.filter((td) => td.id !== id));
  }

  return (
    <View style={styles.container}>
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
      </View>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: '#3b3c4b',
    flex: 1,
  },
  mainContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  dateContainer: {
    paddingTop: 8,
  },
};

export default App;
