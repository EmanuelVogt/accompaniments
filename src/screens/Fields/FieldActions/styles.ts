import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary_light};
  border-radius: ${RFValue(5)}px;
  padding: ${RFValue(10)}px ${RFValue(10)}px;
`
export const Header = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(5)}px;
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  justify-content: flex-end;
  margin-bottom: ${RFValue(10)}px;
  margin-top: ${RFValue(40)}px;
`

export const CloseIcon = styled(Ionicons)`
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.shape};
`
export const CloseButton = styled.TouchableOpacity`
  height: ${RFValue(20)}px;
  width: ${RFValue(20)}px;
`
export const SubContainer = styled.View`
  width: 100%;
`
export const FieldActionContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(5)}px;
  height: ${RFValue(120)}px;
  margin: ${RFValue(5)}px 0;
`
export const FieldActionsButtonsContainer = styled.View`
  flex-direction: row;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
`
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${RFValue(10)}px;
`
export const DefaultButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFValue(60)}px;
  width: 49%;
  border-radius: 5px;
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: ${RFValue(2)}px;
`
export const ButtonTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.shape};
  margin: 0 10px;
`
