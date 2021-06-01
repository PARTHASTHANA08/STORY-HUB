import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer}from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteScreen from './screens/write'
import ReadScreen from './screens/read'
export default function App() {
  return (
    <AppContiner/>
  
  );
}
const TabNavigator = createBottomTabNavigator({
 WriteStory : {screen: WriteScreen},
  ReadStory : {screen:ReadScreen}
})
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
          source={require("./photo/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadStory"){
        return(
          <Image
          source={require("./photo/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}

const AppContiner = createAppContainer(TabNavigator)
