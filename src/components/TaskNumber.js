import React from 'react';
import {StyleSheet, Text} from 'react-native';

function TaskNumber({numberOfTasks}) {
  return (
    <>
      {numberOfTasks > 0 ? (
        <Text style={styles.text}>{numberOfTasks} active tasks</Text>
      ) : (
        <Text style={styles.text}>No active task</Text>
      )}
    </>
  );
}

export default TaskNumber;

const styles = StyleSheet.create({
  text: {
    color: '#63dbfb',
    fontSize: 17,
  },
});
