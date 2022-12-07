import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert, Text} from 'react-native';
import {IColors, INote} from '../models/models';
import {dateString} from '../helpers/dateString';

type PropsAddNote = {
  data: INote[];
  setData: React.Dispatch<INote[]>;
  COLOR: IColors;
};

const AddNote = ({data, setData, COLOR}: PropsAddNote) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const endEditingHandler = () => {
    if (data.map(el => el.name).includes(name)) {
      Alert.alert('Ошибка!', `Заметка "${name}" уже существует.`);
    } else if (name && description) {
      setData([
        ...data,
        {
          name,
          description,
          dateNote: dateString(new Date()),
          active: false,
          remove: false,
          comments: [],
        },
      ]);
      setName('');
      setDescription('');
      Alert.alert('Успешно!', `Заметка "${name}" добавлена.`);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.add}>Добавить заметку:</Text>
      <View style={styles.block}>
        <TextInput
          style={[styles.input, {color: COLOR.text}]}
          placeholder={'Название'}
          placeholderTextColor={COLOR.text}
          maxLength={25}
          value={name}
          onChangeText={setName}
          onEndEditing={endEditingHandler}
        />
        <TextInput
          style={[styles.inputTwo, {color: COLOR.text}]}
          placeholder={'Текст описание'}
          placeholderTextColor={COLOR.text}
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
  add: {
    marginHorizontal: 30,
    marginBottom: 5,
    color: '#8F8F8F',
    fontSize: 12,
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
