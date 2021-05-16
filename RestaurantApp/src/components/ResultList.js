import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ResultDetail from './ResultDetail';

const ResultList = ({title, results, navigation}) => {
  if (!results.length) return null;

  return (
    <View style={{borderBottomWidth: 0.7, borderColor: 'grey', paddingBottom: 10}}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Food Details', {id: item.id})}>
            <ResultDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 15,
    fontWeight: 'bold',
  },
});
