/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
  Platform,
  ActivityIndicator,
} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({route}) => {
  const {id} = route.params;

  const [result, setResult] = useState(null);

  const getResult = async () => {
    try {
      const {data} = await yelp.get(`/${id}`);
      setResult(data);
    } catch (e) {
      console.log('ERROR', e.message);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  if (!result) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="crimson" />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white'}}>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item}} />
        )}
      />
      <Text style={styles.details}>
        Address: {result.location.display_address[0]}
      </Text>
      <Text style={styles.details}>Rating: {result.rating} stars</Text>
      <Text style={styles.details}>Reviews: {result.review_count}</Text>
      <Text style={styles.details}>City: {result.location.city}</Text>
      <Text style={styles.details}>State: {result.location.state}</Text>
      <Text style={styles.details}>Country: {result.location.country}</Text>
      <Text style={styles.details}>Zip Code: {result.location.zip_code}</Text>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: '#51c2d5'}}
          onPress={() => Linking.openURL(`tel: ${result.phone}`)}>
          <Text style={styles.btnText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: '#e24646'}}
          onPress={() => {
            let {
              coordinates: {latitude, longitude},
            } = result;
            let scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
            let url = scheme + `${latitude},${longitude}`;
            Linking.openURL(url);
          }}>
          <Text style={styles.btnText}>Location</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 150,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: '#333',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 15,
  },
  details: {
    fontSize: 20,
    marginLeft: 10,
    marginVertical: 5,
  },
  btn: {
    paddingVertical: 13,
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});
