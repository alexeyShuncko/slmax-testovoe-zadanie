import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {INote} from '../App';
import Swiper from 'react-native-swiper';

type PropsNoteList = {
  data: INote[];
  setData: React.Dispatch<INote[]>;
};

const NoteList = ({data, setData}: PropsNoteList) => {
  const [text, setText] = useState(5);
  const swiper = useRef(null);

  const timer = (num: number, item: INote) => {
    let my = num;
    const timeout = setTimeout(() => {
      let newNum = my - 1;
      setText(prev => prev - 1);
      if (item.remove === false) {
        clearTimeout(timeout);
        setText(5);
        return;
      } else if (newNum >= 1) {
        timer(newNum, item);
      } else {
        setText(5);
        setData([...data.filter(el => el.name !== item.name)]);
        Alert.alert('Успешно!', `Заметка "${item.name}" удалена.`);
      }
    }, 1000);

    return timeout;
  };

  return (
    <View style={styles.block}>
      {data.length !== 0 ? (
        data.map((item, i) => (
          <View key={i} ref={swiper}>
            <Swiper
              height={50}
              showsPagination={false}
              loop={false}
              onIndexChanged={() => {
                data[i].active = false;
                setData([...data]);
              }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  data[i].active = !data[i].active;
                  setData([...data]);
                }}>
                <View style={styles.note}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.description}>
                    {item.description.slice(0, 20) + '...'}
                  </Text>
                  <Text
                    style={[styles.arrow, {transform: [{rotate: '45deg'}]}]}
                  />
                </View>
              </TouchableOpacity>

              <View style={styles.note}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>
                  {item.description.slice(0, 20) + '...'}
                </Text>
                <Text
                  style={[styles.arrow, {transform: [{rotate: '45deg'}]}]}
                />

                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    if (data[i].remove === false) {
                      data[i].remove = !data[i].remove;
                      setData([...data]);
                      timer(5, item);
                    } else {
                      data[i].remove = !data[i].remove;
                      setData([...data]);
                    }
                  }}>
                  {data[i].remove === false ? (
                    <Text style={styles.btnText}>Удалить </Text>
                  ) : (
                    <>
                      <ActivityIndicator color={'#fff'} />
                      <Text style={styles.btnNum}>{text}</Text>
                    </>
                  )}
                </TouchableOpacity>
              </View>
            </Swiper>

            {item.active === true && (
              <View style={styles.fullDescriptionBlock}>
                <Text style={styles.date}>{item.dateNote}</Text>
                <Text style={styles.fullDescription}>{item.description}</Text>
              </View>
            )}
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
  container: {
    width: '100%',
  },
  block: {
    marginTop: 37,
    width: '100%',
  },
  note: {
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 17,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#D2D2D2',
    borderWidth: 1,
  },
  name: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    minWidth: 68.34,
    borderRightColor: 'black',
    borderRightWidth: 0.5,
    marginRight: 8.68,
    paddingRight: 8.68,
  },
  description: {
    fontSize: 8,
    fontWeight: '300',
  },
  arrow: {
    position: 'absolute',
    top: 12,
    right: 15,
    height: 10,
    width: 10,
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 1,
    borderRightColor: '#D2D2D2',
    borderRightWidth: 1,
  },
  fullDescriptionBlock: {
    marginHorizontal: 30,
    paddingHorizontal: 17,
    paddingBottom: 27,
    borderBottomColor: '#D2D2D2',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  date: {
    textAlign: 'right',
    fontSize: 8,
    color: '#8F8F8F',
    marginBottom: 9,
  },
  fullDescription: {
    textAlign: 'left',
    fontSize: 10,
  },
  btn: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 5,
    backgroundColor: '#E30000',
    paddingVertical: 10,
    paddingHorizontal: 23,
    zIndex: 10,
  },
  btnText: {
    color: '#fff',
  },
  btnNum: {
    position: 'absolute',
    top: 10,
    right: 29,
    color: '#fff',
  },
  noNote: {
    textAlign: 'center',
  },
});

export default NoteList;
