import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Player } from '@/components/Player';
import { useColorScheme } from '@/components/useColorScheme';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { VIDEOS } from '@/assets/videos';
import { Dropdown } from 'react-native-element-dropdown';
import Colors from '@/constants/Colors';

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation();
  const [value, setValue] = useState(VIDEOS[0]);

  return (
    <View style={styles.container}>
      <Player />
      <View style={{ width: '100%', gap: 8, paddingHorizontal: 16 }}>
        <Text>{t('Video')}</Text>
        <Dropdown
          data={VIDEOS}
          labelField={'name'}
          valueField={'videoId'}
          value={value}
          onChange={(v) => setValue(v)}
          dropdownPosition={'top'}
          autoScroll
          style={{
            paddingHorizontal: 12,
            height: 50,
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 12,
            borderColor: Colors[colorScheme ?? 'light'].tabIconDefault,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          }}
          selectedTextStyle={{
            color: Colors[colorScheme ?? 'light'].text,
          }}
          mode={'auto'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingBottom: 16,
  },
});
