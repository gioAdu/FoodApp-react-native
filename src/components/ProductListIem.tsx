import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import { Product } from '../types'
import { Link } from 'expo-router'

type ProductListItemProps = {
  product: Product
}

export const defaultProductImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultProductImage }}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.title}> {product.name} </Text>
        <Text style={styles.price}> ${product.price} </Text>
      </Pressable>
    </Link>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    maxWidth: '50%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
})
