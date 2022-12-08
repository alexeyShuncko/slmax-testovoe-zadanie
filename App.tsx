import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {INote, IPeriod} from './src/models/models';
import NavBar from './src/components/NawBar/NavBar';
import SettingNotes from './src/components/SettingNotes/SettingNotes';
import NoteList from './src/components/NoteList/NoteList';
import AddNote from './src/components/AddNote/AddNote';
import {COLORDARK} from './src/styles/colorDark';
import {COLORLIGHT} from './src/styles/colorLight';
import {DateRevers} from './src/helpers/dateRevers';

const App = () => {
  const [dataAll, setData] = useState<INote[]>([
    {
      name: 'Заметкa',
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
      dateNote: '30-11-2022',
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
  const [period, setPeriod] = useState<IPeriod>({
    periodPo: new Date(),
    periodS: new Date('2022-11-25'),
  });
  const COLOR = thema ? COLORDARK : COLORLIGHT;

  const data = dataAll.filter(
    el =>
      new Date(DateRevers(el.dateNote)) >= period.periodS &&
      new Date(DateRevers(el.dateNote)) <= period.periodPo,
  );

  return (
    <ScrollView
      contentContainerStyle={[styles.appBlock, {backgroundColor: COLOR.bg}]}
      scrollEnabled={true}>
      <View style={styles.container}>
        <View style={styles.block}>
          <NavBar thema={thema} />
          <SettingNotes
            period={period}
            setPeriod={setPeriod}
            thema={thema}
            setThema={setThema}
            COLOR={COLOR}
          />
          <NoteList
            data={data}
            setData={setData}
            COLOR={COLOR}
            dataAll={dataAll}
          />
        </View>
        <AddNote data={dataAll} setData={setData} COLOR={COLOR} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  block: {
    width: '100%',
    alignItems: 'center',
  },
});

export default App;
