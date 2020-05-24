import React from 'react'
import { AntDesign } from '@expo/vector-icons';

import {TouchableOpacity,View} from 'react-native'


function Plus({navigation}){

    return(
        <View style={{left:260}} >
            <TouchableOpacity onPress={()=>{navigation.navigate('CreateScreen')}}>
              <AntDesign name="pluscircle" size={30} color="black" />
            </TouchableOpacity>
        </View>
       
    )

}



export default Plus


