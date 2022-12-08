import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcon} from '../Icon';
import {dateString} from '../../helpers/dateString';
import {IColors, IPeriod} from '../../models/models';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

type PropsDate = {
  period: IPeriod;
  setPeriod: React.Dispatch<IPeriod>;
  COLOR: IColors;
};

const DatePic = ({period, COLOR, setPeriod}: PropsDate) => {
  const onChangeS = (e: DateTimePickerEvent, val: any) => {
    period.periodS = val;
    setPeriod({...period});
  };
  const onChangePo = (e: DateTimePickerEvent, val: any) => {
    period.periodPo = val;
    setPeriod({...period});
  };
  const dateHandlerS = () => {
    DateTimePickerAndroid.open({
      value: period.periodS!,
      onChange: onChangeS,
      maximumDate: period.periodPo,
    });
  };
  const dateHandlerPo = () => {
    DateTimePickerAndroid.open({
      value: period.periodPo!,
      onChange: onChangePo,
      minimumDate: period.periodS,
      maximumDate: new Date(),
    });
  };
  return (
    <View style={styles.dateBlock}>
      <View style={styles.icon}>
        <MaterialIcon
          name="calendar"
          color={COLOR.primaryColor}
          size={'medium'}
        />
      </View>
      <TouchableOpacity onPress={dateHandlerS}>
        <Text style={[styles.date, {color: COLOR.text}]}>
          {dateString(period.periodS)}
        </Text>
      </TouchableOpacity>
      <Text style={styles.date}> - </Text>
      <TouchableOpacity onPress={dateHandlerPo}>
        <Text style={[styles.date, {color: COLOR.text}]}>
          {dateString(period.periodPo)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default DatePic;

const styles = StyleSheet.create({
  dateBlock: {
    flexDirection: 'row',
    paddingBottom: 4,
    paddingHorizontal: 10,
    borderBottomColor: '#CBCBCB',
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  date: {
    fontSize: 13,
  },
});
