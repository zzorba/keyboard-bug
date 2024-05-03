import { NativeModules, StyleSheet, TextInput } from 'react-native';
import { Keyboard } from 'react-native-ui-lib'

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useCallback, useRef } from 'react';

export default function TabOneScreen() {
  const component = useRef<TextInput | null>();
  const renderContent = useCallback(() => {
    return (
      <View style={{ backgroundColor: 'red', minHeight: 40 }}>
        <TextInput
          ref={(node) => {
            component.current = node;
          }}
          multiline
          placeholder='Foo'
          style={{ color: 'white', fontSize: 40 }}
        />
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Keyboard.KeyboardAccessoryView
        renderContent={renderContent}
        kbInputRef={component}
        addBottomView
        usesBottomTabs
        scrollBehavior={NativeModules.KeyboardTrackingViewTempManager?.KeyboardTrackingScrollBehaviorFixedOffset}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
