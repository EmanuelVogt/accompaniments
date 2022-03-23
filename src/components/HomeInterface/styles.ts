import { FontAwesome5 } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  border-radius: ${RFValue(5)}px;
  padding: ${RFValue(10)}px ${RFValue(10)}px;
`
export const SelectCropButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const TitleSelect = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_black};
  margin-left: ${RFValue(14)}px;
`
export const CropSelected = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_black};
`
export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: ${RFValue(14)}px;
`
export const FieldActivity = styled.View`
  width: 100%;
  height: ${RFValue(200)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: ${RFValue(10)}px;
  border-radius: 5px;
  padding: ${RFValue(5)}px ${RFValue(5)}px;
`
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`
export const FieldActivityButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFValue(80)}px;
  width: 100%;
  border-radius: 5px;
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const IconTwo = styled(FontAwesome5)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-right: ${RFValue(14)}px;
  margin-left: ${RFValue(14)}px;
`
export const ButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`
export const FieldActivityContainer = styled.View`
  flex-direction: row;
`
export const QrCodeButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFValue(60)}px;
  width: 49%;
  border-radius: 5px;
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: ${RFValue(2)}px;
`
export const GpsButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFValue(60)}px;
  width: 50%;
  border-radius: 5px;
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: ${RFValue(2)}px;
`
export const RoutePlaning = styled.View`
  width: 100%;
  height: ${RFValue(110)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: ${RFValue(10)}px;
  border-radius: 5px;
  padding: ${RFValue(5)}px ${RFValue(5)}px;
`
export const Manegament = styled.View`
  width: 100%;
  height: ${RFValue(250)}px;
  background-color: ${({ theme }) => theme.colors.shape};  
  margin-top: ${RFValue(10)}px;
  border-radius: 5px;
  padding: ${RFValue(5)}px ${RFValue(5)}px;
`
export const DefaultButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFValue(60)}px;
  width: 100%;
  border-radius: 5px;
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: ${RFValue(2)}px;
`
export const PreRegistrationField = styled.View`
  width: 100%;
  height: ${RFValue(110)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: ${RFValue(10)}px;
  border-radius: 5px;
  padding: ${RFValue(5)}px ${RFValue(5)}px;
  margin-bottom: 40px;
`
