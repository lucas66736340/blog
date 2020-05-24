import React,{useContext} from 'react'
import {View,Text,FlatList,Button,TouchableOpacity} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

import BlogContext from '../../context/BlogContext'

import Plus from '../../components/Plus'
//para ter acesso a informação do componente que prove os dados devemos 
//usar o hook useContext

function IndexScreen({navigation}){

    const {data,deleteBlogPost} = useContext(BlogContext)

    
    return(
        <View style={{flex:1}}>
           <Plus  navigation={navigation} />

            <FlatList
                data={data}
                keyExtractor={(obj)=>{  
                    return obj.id
                }}
                
                renderItem={({item})=>{
                    return (
                <TouchableOpacity onPress={()=>{navigation.navigate('ShowScreen',{id:item.id})}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between' ,borderBottomColor:'black',borderBottomWidth:1,paddingVertical:10}}>
                        <Text>{item.title}</Text>     
                        <Text>{item.id}</Text>     
                            <TouchableOpacity onPress={()=>{deleteBlogPost(item.id)}} >
                                <EvilIcons name="trash" size={30} color="black" />
                            </TouchableOpacity>
                     </View>
                </TouchableOpacity>
                    )
                }}
              
            />

           

        </View>
    )

}




export default IndexScreen