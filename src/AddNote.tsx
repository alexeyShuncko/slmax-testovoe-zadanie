import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import {INote} from '../App';

type PropsAddNote = {
  data: INote[];
  setData: React.Dispatch<INote[]>;
};

const AddNote = ({data, setData}: PropsAddNote) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const endEditingHandler = () => {
    if (name && description) {
      const dateString = (date: Date) => {
        let dd = date.getDate();
        if (dd < 10) {
          dd = 0 + dd;
        }
        let mm = date.getMonth() + 1;
        if (mm < 10) {
          mm = 0 + mm;
        }
        let yy = date.getFullYear() % 100;
        if (yy < 10) {
          yy = 0 + yy;
        }
        return dd + '-' + mm + '-' + '20' + yy;
      };
      setData([
        ...data,
        {
          name,
          description,
          dateNote: dateString(new Date()),
          active: false,
          remove: false,
        },
      ]);
      setName('');
      setDescription('');
      Alert.alert('Успешно!', `Заметка "${name}" добавлена.`);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          placeholder={'Название'}
          placeholderTextColor={'black'}
          maxLength={25}
          value={name}
          onChangeText={setName}
          onEndEditing={endEditingHandler}
        />
        <TextInput
          style={styles.inputTwo}
          placeholder={'Текст описание'}
          value={description}
          onChangeText={setDescription}
          onEndEditing={endEditingHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  block: {
    borderRadius: 10,
    borderColor: '#D2D2D2',
    borderWidth: 1,
    marginHorizontal: 30,
    marginBottom: 42,
    paddingLeft: 17,
    paddingRight: 27,
  },
  input: {
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 1,
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
  inputTwo: {
    fontSize: 10,
    fontWeight: '300',
  },
});

export default AddNote;
