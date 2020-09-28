import React from 'react';
import {Text} from 'react-native';

function TaskNumber({numberOfTasks}) {
  return (
    <>
      {numberOfTasks > 0 ? (
        <Text style={styles}>{numberOfTasks} active tasks</Text>
      ) : (
        <Text style={styles}>No active task</Text>
      )}
    </>
  );
}

export default TaskNumber;

const styles = {
  color: '#63dbfb',
};
