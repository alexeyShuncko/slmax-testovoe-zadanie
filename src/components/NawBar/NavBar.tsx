import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type PropsNavBar = {
  thema: boolean;
};

const NavBar = ({thema}: PropsNavBar) => {
  const path5 = thema
    ? require('../../images/dark5.png')
    : require('../../images/Rectangle-5.png');
  const path4 = thema
    ? require('../../images/dark4.png')
    : require('../../images/Rectangle-4.png');
  return (
    <View style={styles.navbar}>
      <Image style={styles.img} source={path5} />
      <Image style={styles.img} source={path4} />
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
