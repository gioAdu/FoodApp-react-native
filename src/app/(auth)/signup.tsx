import Button from '@/src/components/Button'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text>Email</Text>
        <TextInput
          keyboardType='email-address'
          style={styles.input}
          placeholder='john@example.com'
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Password</Text>

        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={styles.passInput}
            placeholder='Enter Password'
          />
          <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color='#aaa'
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>
      </View>

      <Button
        text='Create account'
        buttonStyle={{ backgroundColor: '#026490' }}
      />
      <Link  replace href='/signin' style={styles.signup}>
        Sign in
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  passwordContainer: {
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    marginVertical: 5,
  },
  input: {
    height: 41,
    width: '100%',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  passInput: {
    height: 41,
    flex: 1,
    color: '#333',
    paddingVertical: 10,
    paddingRight: 10,
  },
  signup: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#026490',
  },
  icon: {
    marginLeft: 10,
  },
})

export default SignUp
