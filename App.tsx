import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import AddNote from './src/components/AddNote';
import NavBar from './src/components/NavBar';
import NoteList from './src/components/NoteList';

export interface INote {
  name: string;
  description: string;
  dateNote: string;
  active: boolean;
  remove: boolean;
  comments: IComment[];
}

export interface IComment {
  title: string;
  description: string;
  dateComment: string;
  response: IResponse[];
}

export interface IResponse {
  title: string;
  description: string;
  dateResponse: string;
}

const App = () => {
  const [data, setData] = useState<INote[]>([
    {
      name: 'Заметка',
      description: `Идейные соображения высшего порядка, 
а также реализация намеченных плановых заданий представляет собой интересный эксперимент 
проверки модели развития`,
      dateNote: '29-11-2022',
      active: false,
      remove: false,
      comments: [
        {
          title: 'Коментарий1',
          description:
            'Идейные соображения высшего порядка, а также реализация намеченных ',
          dateComment: '30.11.2022 в 18.00',
          response: [
            {
              title: 'Ответ1',
              description:
                'Идейные соображения высшего порядка, а также реализация намеченных ',
              dateResponse: '30.11.2022 в 18.00',
            },
            {
              title: 'Ответ2',
              description:
                'Идейные соображения высшего порядка, а также реализация намеченных ',
              dateResponse: '30.11.2022 в 18.00',
            },
          ],
        },
        {
          title: 'Коментарий2',
          description:
            'Идейные соображения высшего порядка, а также реализация намеченных ',
          dateComment: '30.11.2022 в 18.00',
          response: [
            {
              title: 'Ответ1',
              description:
                'Идейные соображения высшего порядка, а также реализация намеченных ',
              dateResponse: '30.11.2022 в 18.00',
            },
            {
              title: 'Ответ2',
              description:
                'Идейные соображения высшего порядка, а также реализация намеченных ',
              dateResponse: '30.11.2022 в 18.00',
            },
          ],
        },
      ],
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
