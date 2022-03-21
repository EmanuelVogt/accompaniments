import { FontAwesome5 } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(20)}px;
`
export const Audio = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  margin-right: ${RFValue(2)}px;
`
export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`
