import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary_light};
  border-radius: ${RFValue(5)}px;
`
export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 ${RFValue(20)}px;
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
export const FieldProduction = styled.Text`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${RFValue(16)}px;
  margin: ${RFValue(5)}px 0;
`
