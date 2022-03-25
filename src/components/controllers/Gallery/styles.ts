import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  height: 150px;
`
export const ImageContainer = styled.View``
export const Header = styled.View``
export const EditButton = styled.View``
export const DeleteButton = styled.View``
export const Image = styled.View``

export const ImageList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 10 }
})`
  width: 100%;
  position: absolute;
`
export const ImageCard = styled.View`
  width: ${RFValue(150)}px;
  padding: 19px 23px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 10px;
  border-radius: 5px;
  margin-right: 10px;
`
