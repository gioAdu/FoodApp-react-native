import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { CartItem, Product } from '../types'
import * as Crypto from 'expo-crypto'

type CartType = {
  items: CartItem[]
  addItem: (product: Product, size: CartItem['size']) => void
  updateQuantity: (id: CartItem['id'], amount: -1 | 1) => void
  totalValue: number
}

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  totalValue: 0,
})

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (product: Product, size: CartItem['size']) => {
    const existingItem = items.find(
      (item) => item.product_id === product.id && item.size === size
    )

    if (existingItem) {
      updateQuantity(existingItem.id, 1)
      return
    }

    const newCartItem: CartItem = {
      id: Crypto.randomUUID(),
      product,
      size,
      quantity: 1,
      product_id: product.id,
    }

    setItems([newCartItem, ...items])
  }

  const updateQuantity = (itemId: CartItem['id'], amount: -1 | 1) => {
    setItems(
      items
        .map((item) =>
          item.id !== itemId
            ? item
            : { ...item, quantity: item.quantity + amount }
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const totalValue = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{ items, addItem, updateQuantity, totalValue }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

export const useCart = () => useContext(CartContext)
