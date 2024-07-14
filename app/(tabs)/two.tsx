import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(i18n.language);
  const [items, setItems] = useState(
    Object.keys(i18n.services.resourceStore.data).reduce<{ label: any; value: string }[]>(
      (acc, key) => [
        ...acc,
        {
          label: (i18n.services.resourceStore.data[key].translation as any).translationName,
          value: key,
        },
      ],
      [],
    ),
  );

  const handleChangeLanguage = async (newValue: { label: any; value: string }) => {
    setValue(newValue.value);
    await i18n.changeLanguage(newValue.value ?? i18n.language);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', gap: 8 }}>
        <Text>{t('Language')}</Text>
        <Dropdown
          data={items}
          labelField={'label'}
          valueField={'value'}
          value={value}
          onChange={(v) => handleChangeLanguage(v)}
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
    paddingTop: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});
