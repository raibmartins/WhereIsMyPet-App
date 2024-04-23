import { NativeBaseProvider, StatusBar } from 'native-base';
import SystemPages from './src/core/System';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { TEMAS } from './src/styles/styles';
import Toast from 'react-native-toast-message';

export default function App() {

  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

  return ( 
    <RootSiblingParent>
      <NativeBaseProvider theme={TEMAS}>
        <SystemPages/>
        <Toast />
      </NativeBaseProvider>
    </RootSiblingParent>
  );
}