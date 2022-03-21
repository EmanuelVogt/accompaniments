import { FontAwesome5 } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background_input};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  margin-bottom: ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;
`

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: black;
`

export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
`
