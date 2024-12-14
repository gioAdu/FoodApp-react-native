import dayjs from 'dayjs'
import { forwardRef } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type OrderListItemProps = {
  orderId: string
  time: string
  status: string
  onPress?: () => void
}

const OrderListItem = forwardRef<View, OrderListItemProps>(
  ({ orderId, time, status, onPress }, ref) => {
    return (
      <Pressable ref={ref} onPress={onPress} style={styles.orderContainer}>
        <View>
          <Text style={styles.orderTitle}>Order #{orderId}</Text>
          <Text style={styles.time}>
            {dayjs(time).format('MMMM D, YYYY HH:mm:ss')}
          </Text>
        </View>

        <Text style={styles.orderTitle}>{status}</Text>
      </Pressable>
    )
  }
)

const styles = StyleSheet.create({
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  orderTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  time: {
    color: 'gray',
    paddingTop: 5,
  },
})

export default OrderListItem
