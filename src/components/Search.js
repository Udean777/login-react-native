// import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <Searchbar
    style={{toFixed: true, width: 300, height: 55, textAlign: "center"}}
    placeholder='Search here mate'
    onChangeText={onChangeSearch}
    value={searchQuery}
    />
  )
}

export default Search