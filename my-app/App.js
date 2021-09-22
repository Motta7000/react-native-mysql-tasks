//import {React} from 'react'
import React,{Component} from 'react'
import {Text,TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import TaskFormScreen from './screens/TaskFormScreen'

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="HomeScreen" component={HomeScreen} 
        options={({navigation}) =>({
          title:'Task list',
          headerStyle:{backgroundColor:"#222f3e",borderBottomColor:"#222f3e"},
          headerTitleStyle:{color:"white"},
          headerRight:() => (<TouchableOpacity onPress={() =>navigation.navigate('TaskFormScreen')}>
          <Text style={{color:"white",marginRight:20,fontSize:15}}>New</Text>
          </TouchableOpacity>)
          })}/>
        <Stack.Screen name ="TaskFormScreen" component={TaskFormScreen} options={({navigation}) =>({
          title:'Create a Task',
          headerStyle:{backgroundColor:"#222f3e",borderBottomColor:"#222f3e"},
          headerTitleStyle:{color:"white"},
          headerTintColor:'white'
        })}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App