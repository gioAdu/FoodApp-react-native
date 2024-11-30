import Button from '@/src/components/Button'
import { defaultProductImage } from '@/src/components/ProductListIem'
import Colors from '@/src/constants/Colors'
import { useState } from 'react'
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Stack } from 'expo-router'

const CreateProductScreen = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState('')
  const [image, setImage] = useState<string | null>(null)

  const validateInputs = () => {
    if (name.length === 0) {
      setError('Name is required')
      return false
    }

    if (isNaN(parseFloat(price))) {
      setError('Price is required')
      return false
    }

    return true
  }

  const onCreate = () => {
    if (!validateInputs()) return

    console.log('test')

    resetFields()
    Keyboard.dismiss()
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }
  const resetFields = () => {
    setName('')
    setPrice('')
    setError('')
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      <Stack.Screen
        options={{ title: 'Add Product', headerTitleAlign: 'center' }}
      />

      <Image
        style={styles.image}
        source={{ uri: image || defaultProductImage }}
      />
      <Text onPress={pickImage} style={styles.imageSelect}>
        Select Image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder='Name'
      />
      <View style={{ marginTop: 10 }}>
        <Text style={styles.label}>Price ($)</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          keyboardType='numeric'
          style={styles.input}
          placeholder='9.99'
        />
      </View>
      <Text style={{ color: 'red' }}>{error}</Text>

      <Button onPress={onCreate} text='Add Product' />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 16,
  },
  input: {
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
  imageSelect: {
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
})

export default CreateProductScreen
