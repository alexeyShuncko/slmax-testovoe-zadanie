import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {INote} from '../../App';
import Swiper from 'react-native-swiper';
import Comment from './Comment';

type PropsNote = {
  data: INote[];
  note: INote;
  setData: React.Dispatch<INote[]>;
};

const Note = ({data, note, setData}: PropsNote) => {
  const [dataNote, setDataNote] = useState<INote>(note);
  const [remove, setRemove] = useState(0);
  const [text, setText] = useState(5);
  const swiper = useRef(null);

  function timer(num: number) {
    let my = num;
    const timeout = setTimeout(() => {
      let newNum = my - 1;
      setText(prev => prev - 1);
      if (newNum >= 1) {
        timer(newNum);
      } else {
        setData([...data.filter(el => el.name !== dataNote.name)]);
        Alert.alert('Успешно!', `Заметка "${dataNote.name}" удалена.`);
      }
    }, 1000);
    setRemove(timeout);
  }

  return (
    <View>
      <Swiper
        height={50}
        ref={swiper}
        showsPagination={false}
        loop={false}
        onIndexChanged={() => {
          clearTimeout(remove);
          setText(5);
          dataNote.active = false;
          dataNote.remove = false;
          setDataNote({...dataNote});
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            dataNote.active = !dataNote.active;
            setDataNote({...dataNote});
          }}>
          <View style={styles.note}>
            <Text style={styles.name}>{dataNote.name}</Text>
            <Text style={styles.description}>
              {dataNote.description.slice(0, 20) + '...'}
            </Text>
            <Text style={[styles.arrow, {transform: [{rotate: '45deg'}]}]} />
          </View>
        </TouchableOpacity>

        <View style={styles.note}>
          <Text style={styles.name}>{dataNote.name}</Text>
          <Text style={styles.description}>
            {dataNote.description.slice(0, 20) + '...'}
          </Text>
          <Text style={[styles.arrow, {transform: [{rotate: '45deg'}]}]} />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (dataNote.remove === false) {
                dataNote.remove = true;
                setDataNote({...dataNote});
                timer(5);
              } else {
                clearTimeout(remove);
                setText(5);
                dataNote.remove = false;
                setDataNote({...dataNote});
                swiper.current?.scrollBy(-1);
              }
            }}>
            {dataNote.remove === false ? (
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

      {dataNote.active === true && (
        <View style={styles.fullDescriptionBlock}>
          <Text style={styles.date}>{dataNote.dateNote}</Text>
          <Text style={styles.fullDescription}>{dataNote.description}</Text>
          <View>
            {dataNote.comments.map(com => (
              <Comment com={com} key={com.title} />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: 'black',
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
    color: 'black',
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
});

export default Note;
