import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    marginTop: 10,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#Ffffff'
  }
})

export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${RFValue(3)}px;
  margin-right: ${RFValue(5)}px;
`
