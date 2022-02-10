import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const CurrentPrice = ({ price }) => {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.textPriceTitle}>
                Cotação atual:
            </Text>
            <Text style={styles.currentPrice}>
                $ { price }
            </Text>
            <Text style={styles.textPrice}>
                Ultimas cotações:
            </Text>
        </View>
    )
}

export default CurrentPrice