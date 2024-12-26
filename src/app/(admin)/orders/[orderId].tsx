import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'
import OrderProductItem from '@/src/components/OrderProductItem'
import Colors from '@/src/constants/Colors'
import { OrderStatusList } from '@/src/types'
import { Stack, useLocalSearchParams } from 'expo-router'
import { FlatList, Pressable, Text, View } from 'react-native'

const Order = () => {
  const { orderId } = useLocalSearchParams()

  const currOrder = orders.find((order) => order.id.toString() === orderId)

  if (!currOrder) {
    return <Text>Order not found</Text>
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: `Order #${orderId.toString()}` }} />

      <OrderListItem
        orderId={currOrder.id.toString()}
        time={currOrder.created_at}
        status={currOrder.status}
      />

      <FlatList
        data={currOrder.order_items}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <OrderProductItem item={item} />}
        ListFooterComponent={() => (
          <View>
            <Text style={{ fontWeight: 'bold' }}>Status</Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              {OrderStatusList.map((status) => (
                <Pressable
                  key={status}
                  onPress={() => console.warn('Update status')}
                  style={{
                    borderColor: Colors.light.tint,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                    marginVertical: 10,
                    backgroundColor:
                      currOrder.status === status
                        ? Colors.light.tint
                        : 'transparent',
                  }}
                >
                  <Text
                    style={{
                      color:
                        currOrder.status === status ? 'white' : Colors.light.tint,
                    }}
                  >
                    {status}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default Order
