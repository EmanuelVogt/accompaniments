import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 0 ${RFValue(10)}px;
  height: 90%;
  background-color: ${({ theme }) => theme.colors.secondary_light};
  border-radius: 5px;
  padding: 0 14px;
`

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text_black};
  font-size: 24px;
`
export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  margin-bottom: ${RFValue(20)}px;
`
export const SubContainer = styled.View`
  margin-bottom: ${RFValue(20)}px;
`

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`
