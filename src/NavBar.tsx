import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Image style={styles.img} source={require('./Rectangle-5.png')} />
      <Image style={styles.img} source={require('./Rectangle-4.png')} />

      <Swiper showsPagination={false} loop={false}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Заметки</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Свапер</Text>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    position: 'relative',
    height: 200,
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
