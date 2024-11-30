import { StatusBar } from 'expo-status-bar'
import { FlatList, Platform, View, Text } from 'react-native'
import { useCart } from '../providers/CartProvider'
import CartListItem from '../components/CartListItem'
import Button from '../components/Button'

const CartScreen = () => {
  const { items, totalValue } = useCart()

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        keyExtractor={(item) => item.id}
      />

      {items.length > 0 && (
        <View style={{ marginTop: 10 }}>
          <Button
            customTextStyle={{ fontSize: 20 }}
            text={`Checkout $${totalValue.toFixed(2)}`}
          />
        </View>
      )}

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen
