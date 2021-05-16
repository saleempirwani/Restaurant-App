import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, ActivityIndicator} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [searchAPI, results] = useResults(); // custom hooks

  const filterResult = price =>
    results.filter(result => result.price === price);

  if (!results.length) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="crimson" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar
        setSearch={setSearch}
        search={search}
        onSearchDone={() => searchAPI(search)}
      />
      <ScrollView>
        <ResultList
          results={filterResult('$')}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultList
          results={filterResult('$$')}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultList
          results={filterResult('$$$')}
          title="Big Spencer"
          navigation={navigation}
        />
         <ResultList
          results={filterResult('$$$$')}
          title="Costly Spencer"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1, paddingBottom: 10},
});
