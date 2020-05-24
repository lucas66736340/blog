import React ,{useState,useContext} from 'react'

import {View,Text,TextInput,Button} from 'react-native'

import BlogContext from '../../context/BlogContext'



function CreateScreen({navigation}){

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    const {addBlogPost} = useContext(BlogContext)


    return(
        <View style={{marginLeft:5}}>
            <Text>Enter Title:</Text>
            <TextInput style={{borderWidth:1,borderColor:'black',height:50,width:'80%'}} value={title} onChangeText={(text)=>{setTitle(text)}} />
            
            <Text>Enter Content:</Text>
            <TextInput style={{borderWidth:1,borderColor:'black',height:50,width:'80%'}} value={content} onChangeText={(text)=>{setContent(text)}}/>

            <Button title="add Post" onPress={()=>{
                addBlogPost(title,content)
                navigation.navigate('IndexScreen')
            }} />
        </View>
    )

}

export default CreateScreen