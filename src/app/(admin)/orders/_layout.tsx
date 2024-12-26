import { Stack } from 'expo-router'
import { View } from 'react-native'

const OrderLayout = () => {
  return (
    <Stack screenOptions={{ title: 'Orders', contentStyle: { padding: 10 } }} />
  )
}

export default OrderLayout
