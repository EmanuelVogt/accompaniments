import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  height: ${RFPercentage(33)}px;
  border-radius: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(2)}px ${RFValue(10)}px;
  margin-bottom: ${RFValue(5)}px;
  margin-top: ${RFValue(5)}px;
`
export const SwithContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(10)}px;
`
