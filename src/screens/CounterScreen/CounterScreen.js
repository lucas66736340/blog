import React from 'react'

import Counter from '../../components/Counter'
import { View } from 'react-native'


import {CounterProvider} from '../../context/CounterContext'

function CounterScreen(){
    return(
        <View style={{flex:1}}>
            <CounterProvider>
                <Counter />
            </CounterProvider>
        </View>
    )
}


export default CounterScreen