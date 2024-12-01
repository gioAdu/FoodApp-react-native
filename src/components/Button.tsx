import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import Colors from '../constants/Colors'
import { forwardRef } from 'react'

type ButtonProps = {
  text: string
  customTextStyle?: TextStyle
  buttonStyle?: ViewStyle
} & React.ComponentPropsWithoutRef<typeof Pressable>

const Button = forwardRef<View | null, ButtonProps>(  
  ({ text, customTextStyle, buttonStyle, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={[styles.container, buttonStyle]}
      >
        <Text style={[styles.text, customTextStyle]}>{text}</Text>
      </Pressable>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
})

export default Button
