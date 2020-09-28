import React from 'react';
import {View, Text} from 'react-native';

var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DateContainer = () => {
  const d = new Date();
  const day = days[d.getDay()];
  const month = months[d.getMonth()];

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>
        {day}, {month} {d.getDate()}
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d7dadc',
  },
};

export default DateContainer;
