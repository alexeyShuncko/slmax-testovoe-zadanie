import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Switch} from 'react-native-switch';
import AddNote from './src/components/AddNote';
import NavBar from './src/components/NavBar';
import NoteList from './src/components/NoteList';
import {INote} from './src/models/models';
import {COLORDARK} from './src/styles/colorDark';
import {COLORLIGHT} from './src/styles/colorLight';
import {MaterialIcon} from './src/components/Icon';

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
    {
      name: 'Заметка2',
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
      ],
    },
  ]);
  const [thema, setThema] = useState(false);
  const COLOR = thema ? COLORDARK : COLORLIGHT;
  return (
    <ScrollView
      contentContainerStyle={[styles.appBlock, {backgroundColor: COLOR.bg}]}
      scrollEnabled={true}>
      <View style={styles.container}>
        <View style={styles.block}>
          <NavBar thema={thema} />
          <View style={styles.themaBlock}>
            <Switch
              value={thema}
              onValueChange={() => setThema(!thema)}
              renderInsideCircle={() =>
                !thema ? (
                  <MaterialIcon name="sun" color="#10637D" size={'medium'} />
                ) : (
                  <MaterialIcon name="moon" color="#7363D1" size={'medium'} />
                )
              }
              renderActiveText={false}
              renderInActiveText={false}
              backgroundActive={'#7363D1'}
              backgroundInactive={'#10637D'}
            />
            {/* <Switch
              value={thema}
              onChange={() => setThema(!thema)}
              trackColor={{false: '#10637D', true: '#7363D1'}}
              thumbColor={'#D2D2D2'}
            /> */}
          </View>

          <NoteList data={data} setData={setData} COLOR={COLOR} />
        </View>
        <AddNote data={data} setData={setData} COLOR={COLOR} />
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
  themaBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  block: {
    width: '100%',
    alignItems: 'center',
  },
});

export default App;
