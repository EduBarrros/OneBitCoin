import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const CurrentPrice = () => {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>
                $ 54423.365
            </Text>
            <Text style={styles.textPrice}>
                Ultima cotação:
            </Text>
        </View>
    )
}

export default CurrentPrice