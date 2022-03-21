import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary_light};
`

export const SubContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary_light};
  padding: ${RFValue(10)}px ${RFValue(10)}px;
  height: 90%;
  margin: ${RFValue(5)}px ${RFValue(10)}px;
  border-radius: 5px;
`
export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${RFValue(5)}px ${RFValue(10)}px;
  height: 45px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
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
  font-size: ${RFValue(16)}px;
  color: #000;
`
export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: black;
`
