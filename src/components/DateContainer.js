import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let months = [
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

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d7dadc',
  },
});

export default DateContainer;
