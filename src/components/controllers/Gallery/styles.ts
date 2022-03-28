import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
export const Container = styled.View`
  flex: 1;
  height: 150px;

`
export const ImageContainer = styled.View``
export const Header = styled.View`
  height: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const EditButton = styled(MaterialCommunityIcons)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 5px;
  left: 20px;
`
export const DeleteButton = styled(MaterialCommunityIcons)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.attention_light};
  position: absolute;
  top: 5px;
  right: 20px;
`
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
  height: 150px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 10px;
  border-radius: 5px;
  margin-right: 10px;
`
