import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'
import OrderProductItem from '@/src/components/OrderProductItem'
import { Stack, useLocalSearchParams } from 'expo-router'
import { FlatList, ScrollView, Text, View } from 'react-native'

const Order = () => {
  const { orderId } = useLocalSearchParams()

  const currOrder = orders.find((order) => order.id.toString() === orderId)

  if (!currOrder) {
    return <Text>Order not found</Text>
  }

  return (
    <View>
      <Stack.Screen options={{ title: `Order #${orderId.toString()}` }} />

      <OrderListItem
        orderId={currOrder.id.toString()}
        time={currOrder.created_at}
        status={currOrder.status}
      />

      <FlatList
        data={currOrder.order_items}
        contentContainerStyle={{ gap: 5, }}
        renderItem={({ item }) => <OrderProductItem item={item} />}
      />
    </View>
  )
}

export default Order
