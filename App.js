import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGrafic from './src/components/HistoryGrafic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItem from './src/components/QuotationsList/QuotationsItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='#f50d41'
        barStyle='light-content'
      />
      <CurrentPrice />
      <HistoryGrafic />
      <QuotationsList />
      <QuotationsItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
