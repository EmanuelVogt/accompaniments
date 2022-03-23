import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TextInput`
  width: 100%;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  font-size: ${RFValue(12)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  color: black;
  border-radius: 5px;
  margin-bottom: ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;
`
