import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type Field = {
  name: string
  key: string
}
type CameraParams = {
  formName: string
}
export type RootStackParamList = {
  Home: undefined
  Field: Field
  FieldSelect: undefined
  AccompanimentForm: undefined
  FieldActions: undefined
  Camera: CameraParams
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
