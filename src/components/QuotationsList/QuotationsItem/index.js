import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const QuotationsItem = () => {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                    style={styles.logoBitcoin}
                    source={require('../../../img/bitcoinred.png')}
                    />
                    <Text style={styles.dayCotation}>
                        09/02/2022
                    </Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>
                    $ 53333.543
                </Text>
            </View>
        </View>
    )
}

export default QuotationsItem