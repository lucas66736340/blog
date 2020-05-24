import React,{useContext} from 'react'

import {View,Text,Button} from 'react-native'

import CounterContext from '../context/CounterContext'
 

function Counter(){
    const {data,increment,decrement} = useContext(CounterContext)

    return (
        <View>
            <Text style={{textAlign:'center'}}>{data}</Text>
            <Button onPress={increment} title="Increment" />
            <Button onPress={decrement} title="Decrement" />
        </View>
    )
}

export default Counter