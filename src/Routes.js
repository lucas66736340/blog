import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import IndexScreen from './screens/IndexScreen/IndexScreen'
import ShowScreen from './screens/ShowScreen/ShowScreen'
import CreateScreen from './screens/CreateScreen/CreateScreen'

//componente que vai prover todos os dados 
import {BlogProvider} from './context/BlogContext' 


const Stack = createStackNavigator();


function Routes(){

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="IndexScreen">
                 <Stack.Screen options={{title:'Index'}}
                  name="IndexScreen"
                   component={IndexScreen}
                   
                    />

                 <Stack.Screen options={{title:'Show'}} name="ShowScreen" component={ShowScreen} />   
                 <Stack.Screen options={{title:'Create'}} name="CreateScreen" component={CreateScreen} />   
            </Stack.Navigator>
      </NavigationContainer>
    )
 }

export default ()=> {

    return (
      //componente que vai prover todos os dados necessarios
    <BlogProvider>  
      <Routes/>
    </BlogProvider>  

    )
} 
   

