import AsyncStorage from '@react-native-async-storage/async-storage'
export async function resetData() {
  await AsyncStorage.removeItem('@IMAGE')
}
