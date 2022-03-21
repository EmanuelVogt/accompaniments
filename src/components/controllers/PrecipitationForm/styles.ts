import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  height: ${RFValue(175)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(2)}px ${RFValue(10)}px;
  margin-bottom: ${RFValue(5)}px;
`
