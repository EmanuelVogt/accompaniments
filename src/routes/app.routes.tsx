import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { Accompaniments } from '../screens/Accompaniments'
import { FieldSelect } from '../screens/FieldSelect'
import { Home } from '../screens/Home'
import { MainNavigation } from '../types'

const MainStack = createNativeStackNavigator<MainNavigation>()

export function AppRoutes() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        options={{
          headerShown: false
        }}
        name="Home"
        component={Home}
      />
      <MainStack.Screen
        options={{
          headerShown: false
        }}
        name="Accompaniments"
        component={Accompaniments}
      />
      <MainStack.Screen
        options={{
          headerShown: false
        }}
        name="FieldSelect"
        component={FieldSelect}
      />
    </MainStack.Navigator>
  )
}
