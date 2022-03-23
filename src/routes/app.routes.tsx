import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { AccompanimentsForm } from '../components/AccompanimentsForm'
import { FieldSelect } from '../screens/FieldSelect'
import { Field } from '../screens/Fields'
import { FieldActionsModal } from '../screens/Fields/FieldActions'
import { Home } from '../screens/Home'
import { RootStackParamList } from '../types/navigation'

const MainStack = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2c8a8f'
        },
        headerTintColor: '#fff'
      }}
    >
      <MainStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <MainStack.Screen
        options={({ route }) => ({ title: route.params.name })}
        name="Field"
        component={Field}
      />
      <MainStack.Screen
        options={{
          title: 'Selecionar campo',
          animation: 'slide_from_right'
        }}
        name="FieldSelect"
        component={FieldSelect}
      />
      <MainStack.Screen
        options={{ title: 'Adicione...', animation: 'slide_from_right' }}
        name="AccompanimentForm"
        component={AccompanimentsForm}
      />
      <MainStack.Group screenOptions={{ presentation: 'modal', animation: 'slide_from_bottom' }}>
        <MainStack.Screen
          options={{ headerShown: false }}
          name="FieldActions"
          component={FieldActionsModal}
        />
      </MainStack.Group>
    </MainStack.Navigator>
  )
}
