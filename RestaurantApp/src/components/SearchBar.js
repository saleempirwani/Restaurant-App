import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({search, setSearch, onSearchDone}) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="search" size={30} />
      <TextInput
        selectionColor={'#333'}
        value={search}
        onChangeText={setSearch}
        onEndEditing={onSearchDone}
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0eeee',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});
