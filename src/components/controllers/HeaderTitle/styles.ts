import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${RFValue(5)}px ${RFValue(10)}px;
  height: 45px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`
export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
`
