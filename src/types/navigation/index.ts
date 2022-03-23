import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type Field = {
  name: string
  key: string
}
export type RootStackParamList = {
  Home: undefined
  Field: Field
  FieldSelect: undefined
  AccompanimentForm: undefined
  FieldActions: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
