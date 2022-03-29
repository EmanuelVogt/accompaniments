import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`
export const IconTwo = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(70)}px;
  color: ${({ theme }) => theme.colors.primary};
`
export const CameraOffIcon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(70)}px;
  color: ${({ theme }) => theme.colors.attention_light};
`
export const Input = styled.TextInput`
  width: 100%;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  font-size: ${RFValue(18)}px;
  background-color: ${({ theme }) => theme.colors.secondary_light};
  color: black;
  border-radius: 5px;
  margin-bottom: ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;
`
