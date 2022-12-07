import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert, Text} from 'react-native';
import {IColors, IComment, INote} from '../models/models';
import {dateString} from '../helpers/dateString';

type PropsAddNote = {
  data: INote[];
  setData: React.Dispatch<INote[]>;
  com: IComment;
  setResponse: React.Dispatch<boolean>;
  COLOR: IColors;
};

const AddResponse = ({
  data,
  setData,
  com,
  setResponse,
  COLOR,
}: PropsAddNote) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const endEditingHandler = () => {
    if (com.response.map(res => res.title).includes(name)) {
      Alert.alert('Ошибка!', `Ответ "${name}" уже существует.`);
    } else if (!name && !description) {
      setResponse(false);
    } else if (name && description) {
      com.response = [
        ...com.response,
        {
          title: name,
          description,
          dateResponse: dateString(new Date(), true),
        },
      ];
      setData([...data]);
      Alert.alert('Успешно!', `Ответ "${name}" добавлен.`);
      setResponse(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.add}>Ответ на комментарий - "{com.title}":</Text>
      <View style={styles.block}>
        <TextInput
          autoFocus={true}
          style={[styles.input, {color: COLOR.text}]}
          placeholder={'Название ответа'}
          placeholderTextColor={COLOR.text}
          maxLength={25}
          value={name}
          onChangeText={setName}
          onEndEditing={endEditingHandler}
        />
        <TextInput
          style={[styles.inputTwo, {color: COLOR.text}]}
          placeholder={'Текст ответа'}
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

export default AddResponse;
