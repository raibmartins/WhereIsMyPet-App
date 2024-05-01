import { NativeBaseProvider, StatusBar } from 'native-base';
import SystemPages from './src/core/System';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { TEMAS } from './src/styles/styles';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export default function App() {

  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);
  
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: '#0ABF04' }}
        text1NumberOfLines={10}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: '#FF0033' }}
        text1NumberOfLines={10}
      />
    ),
  };

  return ( 
    <RootSiblingParent>
      <NativeBaseProvider theme={TEMAS}>
        <SystemPages/>
        <Toast config={toastConfig}/>
      </NativeBaseProvider>
    </RootSiblingParent>
  );
}