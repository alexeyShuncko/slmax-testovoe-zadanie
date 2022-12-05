import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import AddNote from './src/AddNote';
import NavBar from './src/NavBar';
import NoteList from './src/NoteList';

export interface INote {
  name: string;
  description: string;
  dateNote: string;
  active: boolean;
  remove: boolean;
}

const App = () => {
  const [data, setData] = useState<INote[]>([
    {
      name: 'Название',
      description: `Идейные соображения высшего порядка, 
а также реализация намеченных плановых заданий представляет собой интересный эксперимент 
проверки модели развития`,
      dateNote: '29-11-2022',
      active: false,
      remove: false,
    },
    {
      name: 'Название1',
      description: `Идейные соображения высшего порядка, 
а также реализация намеченных плановых заданий представляет собой интересный эксперимент 
проверки модели развития`,
      dateNote: '29-11-2022',
      active: false,
      remove: false,
    },
    {
      name: 'Название2',
      description: `Идейные соображения высшего порядка, 
а также реализация намеченных плановых заданий представляет собой интересный эксперимент 
проверки модели развития`,
      dateNote: '29-11-2022',
      active: false,
      remove: false,
    },
  ]);
  return (
    <ScrollView contentContainerStyle={styles.appBlock} scrollEnabled={true}>
      <View style={styles.container}>
        <View style={styles.block}>
          <NavBar />
          <NoteList data={data} setData={setData} />
        </View>
        <AddNote data={data} setData={setData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appBlock: {
    minHeight: 625,
  },
  container: {
    flex: 1,
    fontFamily: 'Raleway',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  block: {
    width: '100%',
    alignItems: 'center',
  },
});

export default App;
