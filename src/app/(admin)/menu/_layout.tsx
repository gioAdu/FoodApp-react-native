import { FontAwesome } from '@expo/vector-icons'
import { Link, Stack, useRouter } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'
import Colors from '@/src/constants/Colors'

export default function MenuLayout() {
  const colorScheme = useColorScheme()

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: 'Menu',
          headerRight: () => {
            const router = useRouter()
            return (
              <Pressable onPressIn={() => router.push('/cart')}>
                {({ pressed }) => (
                  <FontAwesome
                    name='plus-square-o'
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            )
          },
        }}
      />

      <Stack.Screen
        name='[productId]'
        options={{
          title: 'Menu',
          headerRight: () => {
            const router = useRouter()
            return (
              <Pressable onPressIn={() => router.push('/cart')}>
                {({ pressed }) => (
                  <FontAwesome
                    name='pencil'
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            )
          },
        }}
      />
    </Stack>
  )
}
