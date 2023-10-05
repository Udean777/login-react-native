import { View, Text, FlatList, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Divider } from 'react-native-paper'
import UserNavigation from '../Navigation/UserNavigation'

const User = () => {
  const [user, setUser] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  useEffect( () => {
    const funcProfile = async () => {
      try {
        const user = await axios.get("https://jsonplaceholder.typicode.com/users/1")
        setUser(user.data)
  
        const profile = await axios.get(`https://jsonplaceholder.typicode.com/photos/${user.data.id}`)
        setPhoto(profile.data)
      } catch (error) {
        setError(error)
      }
    }

    funcProfile()
  },[])
  
  return (
    <ScrollView>
      {user && (
        <View style={{ padding: 20}}>
          <View style={styles.userInfo}>
            <Image
              source={{ uri: photo?.url }} 
              style={styles.userImage}
            />
            <View style={{ marginLeft: 10}}>
              <Text style={styles.username}>{user.username}</Text>
              <Text>{user.email}</Text>
            </View>
          </View>
        </View>
      )}
      {error && <Text style={{ color: "red", fontWeight: "900" }}>{error}</Text>}
        <Divider/>
     <View>
     <UserNavigation/>
     </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    fontWeight: "900",
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    display: "flex", 
    gap: 20
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default User