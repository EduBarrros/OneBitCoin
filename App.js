import React, { useState, useEffect } from 'react';
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

  const [coinsList, setCoinsList] = useState();
  const [coinsGraficList, setCoinsGraficList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);

  const updateDay = (number) => {
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {

    getListCoins(url(days)).then((data) => {
      setCoinsList(data);
    })

    getPriceCoinsGrafic(url(days)).then((dataG) => {
      setCoinsGraficList(dataG);
    })

    if (updateData) {
      setUpdateData(false)
    }

  }, [updateData])

  const addZero = (number) => {
    if (number <= 9) {
      return '0' + number
    } else {
      return number
    }
  }

  const url = (qtdDays) => {
    const date = new Date();
    //console.log('Teste data ->', date.getDate())
    const listLastDays = qtdDays
    const end_date = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`
    date.setDate(date.getDate() - listLastDays)
    const start_date = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`

    //console.log('Teste End_date ->',end_date)
    //console.log('Teste Start_date ->',start_date)

    return (
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
    )
  }

  const getListCoins = async (url) => {
    let response = await fetch(url);
    let returnApi = await response.json();
    let selectListQuotations = returnApi.bpi;
    const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
      return {
        data: key.split("-").reverse().join("/"),
        valor: selectListQuotations[key]
      }
    })
    let data = queryCoinsList.reverse();

    //console.log('Teste data List ->', data)

    return data;
  }

  const getPriceCoinsGrafic = async (url) => {
    let responseG = await fetch(url);
    let returnApiG = await responseG.json();
    let selectListQuotationsG = returnApiG.bpi;
    const queryCoinsList = Object.keys(selectListQuotationsG).map((key) => {
      return selectListQuotationsG[key]
    })
    let dataG = queryCoinsList;

    console.log('Teste data Price ->', dataG)

    return dataG;
  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='#f50d41'
        barStyle='light-content'
      />
      <CurrentPrice />
      <HistoryGrafic infoGrafic={ coinsGraficList }/>
      <QuotationsList
        filterDay={updateDay}
        listTransactions={coinsList}
      />
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
