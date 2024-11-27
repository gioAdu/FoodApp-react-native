import { Stack, useLocalSearchParams } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import products from '@/assets/data/products'
import { defaultProductImage } from '@/src/components/ProductListIem'
import { useState } from 'react'

const sizes = ['S', 'M', 'L', 'XL']

export default function ProductDetailScreen() {
  const { productId } = useLocalSearchParams()

  const [activeSize, setActiveSize] = useState('M')

  const product = products.find((p) => p.id.toString() === productId)

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

      <Text>Select size</Text>

      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setActiveSize(size)}
            style={[
              styles.size,
              { backgroundColor: size === activeSize ? 'gainsboro' : 'white' },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.textSize,
                { color: size === activeSize ? 'black' : 'gray' },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>{product.price}</Text>
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
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSize: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  activeSize: {
    backgroundColor: 'gainsboro',
  },
})
