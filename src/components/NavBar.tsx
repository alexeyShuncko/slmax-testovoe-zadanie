import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Image style={styles.img} source={require('../Rectangle-5.png')} />
      <Image style={styles.img} source={require('../Rectangle-4.png')} />
      <Text style={styles.text}>Заметки</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'relative',
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default NavBar;
