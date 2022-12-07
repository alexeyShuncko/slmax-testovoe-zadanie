import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert, Text} from 'react-native';
import {INote} from '../models/models';
import {dateString} from '../helpers/dateString';

type PropsAddNote = {
  data: INote[];
  setData: React.Dispatch<INote[]>;
  setAddComment: React.Dispatch<boolean>;
  dataNote: INote;
};

const AddComment = ({data, setData, dataNote, setAddComment}: PropsAddNote) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const endEditingHandler = () => {
    if (dataNote.comments.map(com => com.title).includes(name)) {
      Alert.alert('Ошибка!', `Комментарий "${name}" уже существует.`);
    } else if (!name && !description) {
      setAddComment(false);
    } else if (name && description) {
      dataNote.comments = [
        ...dataNote.comments,
        {
          title: name,
          description,
          dateComment: dateString(new Date(), true),
          response: [],
        },
      ];
      setData([...data]);
      Alert.alert('Успешно!', `Комментарий "${name}" добавлен.`);
      setAddComment(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.add}>Комментарий к заметке - "{dataNote.name}":</Text>
      <View style={styles.block}>
        <TextInput
          autoFocus={true}
          style={styles.input}
          placeholder={'Название комментария'}
          placeholderTextColor={'black'}
          maxLength={25}
          value={name}
          onChangeText={setName}
          onEndEditing={endEditingHandler}
        />
        <TextInput
          style={styles.inputTwo}
          placeholder={'Текст комментария'}
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
    marginTop: 10,
  },
  add: {
    marginBottom: 5,
    color: '#8F8F8F',
    fontSize: 12,
  },
  block: {
    borderRadius: 10,
    borderColor: '#D2D2D2',
    borderWidth: 1,
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

export default AddComment;
