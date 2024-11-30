import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import products from '@/assets/data/products'
import { defaultProductImage } from '@/src/components/ProductListIem'
import { useState } from 'react'
import Button from '@/src/components/Button'
import { useCart } from '@/src/providers/CartProvider'
import { PizzaSize } from '@/src/types'

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

export default function ProductDetailScreen() {
  const { productId } = useLocalSearchParams()
  const { addItem } = useCart()
  const router = useRouter()

  const [activeSize, setActiveSize] = useState<PizzaSize>('M')

  const product = products.find((p) => p.id.toString() === productId)

  const AddToCart = () => {
    if (!product) return

    addItem(product, activeSize)

    router.push('/cart')
  }
  if (!product) {
    return <Text>Product not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: ` ${product.name} ` }} />

      <Image
        style={styles.image}
        source={{ uri: product.image || defaultProductImage }}
      />

      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  textSize: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
