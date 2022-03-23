import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary_light};

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
  font-size: 20px;
`

export const SubContainer = styled.View`
  flex: 1;
  padding: 0 14px;
`
