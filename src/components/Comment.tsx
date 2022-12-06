import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IComment} from '../../App';

type PropsComment = {
  com: IComment;
};

const Comment = ({com}: PropsComment) => {
  const [all, setAll] = useState(false);
  return (
    <View>
      <View style={styles.comment}>
        <Text style={styles.title}>{com.title}</Text>
        <Text style={styles.description}>{com.description}</Text>
        <View style={styles.dateBlock}>
          <Text style={styles.date}>{com.dateComment}</Text>
          <TouchableOpacity>
            <Text style={styles.date}>Ответить</Text>
          </TouchableOpacity>
        </View>
      </View>
      {all ? (
        <View>
          {com.response.map(res => (
            <View style={styles.responseBlock} key={res.title}>
              <Text style={styles.title}>{res.title}</Text>
              <Text style={styles.description}>{res.description}</Text>
              <Text style={styles.date}>{res.dateResponse}</Text>
            </View>
          ))}
        </View>
      ) : (
        <View>
          <View style={styles.responseBlock}>
            <Text style={styles.title}>{com.response[0].title}</Text>
            <Text style={styles.description}>
              {com.response[0].description}
            </Text>
            <Text style={styles.date}>{com.response[0].dateResponse}</Text>
          </View>
        </View>
      )}

      <TouchableOpacity onPress={() => setAll(!all)}>
        {all ? (
          <Text style={styles.allResponse}>Скрыть ответы</Text>
        ) : (
          <Text style={styles.allResponse}>Показать все ответы</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Comment;

const styles = StyleSheet.create({
  comment: {
    paddingTop: 11,
    paddingLeft: 11,
    paddingBottom: 7,
    paddingRight: 7,
    marginTop: 26,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 10,
    fontWeight: '700',
    color: 'black',
    marginBottom: 5,
  },
  description: {
    fontFamily: 'Raleway',
    fontSize: 8,
    color: 'black',
    fontWeight: '300',
    marginBottom: 5,
  },
  dateBlock: {
    flexDirection: 'row',
  },
  date: {
    fontSize: 7,
    color: '#8F8F8F',
    marginRight: 10,
  },
  responseBlock: {
    marginTop: 10,
    marginLeft: 21,
  },
  allResponse: {
    marginTop: 10,
    marginLeft: 21,
    fontSize: 8,
    color: '#8F8F8F',
  },
});
