import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`
