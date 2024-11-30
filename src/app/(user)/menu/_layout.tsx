import { FontAwesome } from '@expo/vector-icons'
import { Link, Stack, useRouter } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'
import Colors from '@/src/constants/Colors'

export default function MenuLayout() {
  const colorScheme = useColorScheme()

  return (
    <Stack
      screenOptions={{
        //KEEP THIS ONE UNTIL THE BUG IS FIXED IN THE EXPO-ROUTER 
        headerRight: () => {
          const router = useRouter()
          return (
            <Pressable onPressIn={() => router.push('/cart')}>
              {({ pressed }) => (
                <FontAwesome
                  name='shopping-cart'
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          )
        },
        // headerRight: () => (
        //   <Link href='/cart' asChild>
        //     <Pressable >
        //       {({ pressed }) => (
        //         <FontAwesome
        //           name='shopping-cart'
        //           size={25}
        //           color={Colors[colorScheme ?? 'light'].text}
        //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
        //         />
        //       )}
        //     </Pressable>
        //   </Link>
        // ),
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Menu',
        }}
      />
    </Stack>
  )
}
