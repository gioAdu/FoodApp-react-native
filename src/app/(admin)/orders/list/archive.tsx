import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'
import { Link } from 'expo-router'
import { useCallback, useState } from 'react'
import { FlatList, RefreshControl, Text, View } from 'react-native'

const orderIndex = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    //do some api call(dummy for now)
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 500)
  }, [])

  return (
    <FlatList
      style={{ paddingHorizontal: 10, paddingTop: 5 }}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={orders}
      renderItem={({ item }) => (
        <Link href={`/orders/${item.id}`} asChild>
          <OrderListItem
            orderId={item.id.toString()}
            time={item.created_at}
            status={item.status}
          />
        </Link>
      )}
    />
  )
}

export default orderIndex
