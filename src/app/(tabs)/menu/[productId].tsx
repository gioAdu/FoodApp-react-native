import { Stack, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function ProductDetailScreen() {
  const { productId } = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen options={{ title: `Details ${productId}` }} />

      <Text>Product detail screen, id: {productId}</Text>
    </View>
  )
}
