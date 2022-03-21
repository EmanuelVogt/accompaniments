import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${RFValue(5)}px ${RFValue(10)}px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 20px;
`

