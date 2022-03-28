import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
export const Container = styled.View`
  flex: 1;
  height: 200px;
`
export const ImageContainer = styled.View`
  margin-top: 10px;
  padding: 5px;
`
export const Header = styled.View`
  height: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const EditButton = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  left: 20px;
  width: 25px;
  height: 25px;
`
export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  right: 20px;
  width: 25px;
  height: 25px;
`
export const Image = styled.Image`
  height: 120px;
  width: 100%;
  border-radius: 5px;
`

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
  height: 190px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 10px;
  border-radius: 5px;
  margin-right: 10px;
`
export const ImageDescription = styled.Text`
  margin-top: 5px;
  width: 100%;
  font-size: 12px;
`
export const DeleteIconButton = styled(MaterialCommunityIcons)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.attention_light};
`
export const EditIconButton = styled(MaterialCommunityIcons)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`
