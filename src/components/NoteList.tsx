import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {INote} from '../models/models';
import Note from './Note';

type PropsNoteList = {
  data: INote[];
  setData: React.Dispatch<INote[]>;
};

const NoteList = ({data, setData}: PropsNoteList) => {
  return (
    <View style={styles.block}>
      {data.length !== 0 ? (
        data.map(note => (
          <View key={note.name}>
            <Note note={note} setData={setData} data={data} />
          </View>
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
    marginTop: 37,
    width: '100%',
  },
  noNote: {
    textAlign: 'center',
  },
});

export default NoteList;
