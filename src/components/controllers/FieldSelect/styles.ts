import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const SubContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary_light};
  margin: 24px 24px;
  padding: 24px 24px;
  height: 80%;
  border-radius: 12px;
`
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}PX;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`
export const Field = styled.TouchableOpacity`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
`

export const Name = styled.Text`
  font-size: ${RFValue(18)}px;
  color: #000;
`
export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: black;
`
