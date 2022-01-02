/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import bookings from './src/data/bookings.json'

const App = () => {

  const [bookingList, setBookingList] = useState(bookings.poiList);
  const [demoList, setDemoList] = useState([
    {key:1}, {key:2}
  ]);

  return (
        <HomeScreen></HomeScreen>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
