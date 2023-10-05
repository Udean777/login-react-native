import { StyleSheet, Text, View } from 'react-native'
import {TextInput} from 'react-native-paper'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Button } from 'react-native-paper'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {onLogin} = useAuth()
  const [error, setError] = useState(null)

  const login = async () => {
    if (!email || !password) {
      setError("Password atau email mu belum diisi su!")
      return;
    }

    try {
      const result = await onLogin(email, password);
      setError(null);
      
      return result
    } catch (error) {
      console.error(error);
      setError("Login gagal. Periksa kembali email dan password Anda.")
    }
  }

  return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center", gap: 20}}>
      <Text style={styles.heading}>Login</Text>
      <View style={{display:"flex", gap:10, width: 200}}>
        <TextInput mode="outlined" label="Username/Email" onChangeText={(text) => setEmail(text)}/>
        <TextInput mode="outlined" label="Password" onChangeText={(text) => setPassword(text)} secureTextEntry/>
      </View>
       <Button mode='contained' buttonColor='#3a01ba' onPress={login}>Sign In</Button>
       {error && <Text style={{color: "red", fontWeight: "900"}}>{error}</Text>}
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "900",
    color: "#3a01ba"
  },
  input: {
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10
  },
})