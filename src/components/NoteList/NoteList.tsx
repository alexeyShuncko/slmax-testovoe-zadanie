import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IColors, INote} from '../../models/models';
import Note from './Note';

type PropsNoteList = {
  data: INote[];
  setData: React.Dispatch<INote[]>;
  COLOR: IColors;
  dataAll: INote[];
};

const NoteList = ({data, setData, COLOR, dataAll}: PropsNoteList) => {
  return (
    <View style={styles.block}>
      {data.length !== 0 ? (
        data.map(note => (
          <Note
            key={note.name}
            note={note}
            setData={setData}
            COLOR={COLOR}
            dataAll={dataAll}
          />
        ))
      ) : (
        <View>
          <Text style={styles.noNote}>Пока нет заметок...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginTop: 20,
    width: '100%',
  },
  noNote: {
    textAlign: 'center',
  },
});

export default NoteList;
