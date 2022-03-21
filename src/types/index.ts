import { NavigatorScreenParams } from '@react-navigation/native'

export type MainNavigation = {
  Home: undefined
  Accompaniments: undefined
  FieldSelect: undefined
}

export type RootNavigatorParamsList = {
  Main: NavigatorScreenParams<MainNavigation>
}
