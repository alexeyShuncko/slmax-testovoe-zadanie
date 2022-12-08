import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Switch} from 'react-native-switch';
import {IColors, IPeriod} from '../../models/models';
import {MaterialIcon} from '../Icon';
import DatePic from './DatePic';

type PropsSetting = {
  period: IPeriod;
  COLOR: IColors;
  setPeriod: React.Dispatch<IPeriod>;
  thema: boolean;
  setThema: React.Dispatch<boolean>;
};

const SettingNotes = ({
  period,
  COLOR,
  setPeriod,
  thema,
  setThema,
}: PropsSetting) => {
  return (
    <View style={styles.settings}>
      <View style={styles.themaBlock}>
        <DatePic period={period} COLOR={COLOR} setPeriod={setPeriod} />
        <Switch
          value={thema}
          onValueChange={setThema}
          renderInsideCircle={() => (
            <MaterialIcon
              name={!thema ? 'sun' : 'moon'}
              color={COLOR.primaryColor}
              size={'medium'}
            />
          )}
          renderActiveText={false}
          renderInActiveText={false}
          backgroundActive={COLOR.primaryColor}
          backgroundInactive={COLOR.secondaryColor}
        />
      </View>
    </View>
  );
};
export default SettingNotes;

const styles = StyleSheet.create({
  settings: {
    width: '100%',
  },
  themaBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 10,
  },
});
