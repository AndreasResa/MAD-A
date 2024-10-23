import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.title}>Biodata</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image1}
          source={require('../assets/pribadi.jpg')}
        />
        <Text style={styles.title1}>Nama : Pangkerego, Andreas Resa</Text>
        <Text style={styles.title2}>
          Tempat,tanggal lahir : Manado, 11 April 2004
        </Text>
        <Text style={styles.title3}>Jurusan : Informatika</Text>
        <Text style={styles.title4}>Hobi : Basket, Game</Text>
        <Text style={styles.title5}>Game yang dimainkan:</Text>
        <Image
          style={styles.image2}
          source={require('../assets/valorant.jpg')}
        />
        <Image
          style={styles.image3}
          source={require('../assets/left4dead.jpg')}
        />
        <Image style={styles.image4} source={require('../assets/pubg.jpg')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image1: {
    height: 0,
    width: 0,
    margin: 110,
    padding: 150,
    paddingRight: 20,
    borderRadius: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    padding: 20,
    margin: 20,
  },

  title1: {
    fontSize: 15,
    padding: 5,
    color: 'black',
  },

  title2: {
    color: 'black',
    padding: 5,
    fontSize: 15,
  },

  title3: {
    color: 'black',
    padding: 5,
    fontSize: 15,
  },

  title4: {
    color: 'black',
    padding: 5,
    fontSize: 15,
  },

  title5: {
    color: 'black',
    padding: 5,
    fontSize: 15,
  },

  image2: {
    height: 100,
    width: 200,
    margin: 10,
  },

  image3: {
    height: 100,
    width: 200,
    margin: 10,
  },

  image4: {
    height: 100,
    width: 200,
    margin: 10,
  },
});

export default App;
