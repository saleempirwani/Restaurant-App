import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ResultDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: result.image_url}} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={{...styles.name, color: 'grey' }}>
        {result.rating} stars {result.review_count} reviews
      </Text>
    </View>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: '#333',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});
