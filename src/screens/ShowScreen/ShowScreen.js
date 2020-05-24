import React,{useContext} from 'react'

import {View,Text} from 'react-native'

import BlogContext from '../../context/BlogContext'


export default function ShowScreen({route}){

    const {data} = useContext(BlogContext)

    const {id} = route.params

    //usar context quando tiver que acessar os dados globais
    const post = data.find((blogPost)=>{
        return blogPost.id === id 
    })

        return(
            <View>
                <Text>{post.title}</Text>
                <Text>{post.content}</Text>
            </View>
        )
}