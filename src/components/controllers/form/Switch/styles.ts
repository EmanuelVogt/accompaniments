import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`
