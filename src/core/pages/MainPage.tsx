import * as React from 'react';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { Box, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Texto } from '../../components/Texto';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Map from './map/Map';
import { Logo } from '../../components/SystemLogo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PetsPage from './pets/PetsPage';

const Drawer = createDrawerNavigator();

const tabs = [
  {
    id: 0,
    name: 'Mapa',
    title: 'Mapa',
    icon: <Ionicons name='map' size={20} color='#64BC52' />,
    component: Map
  },
  {
    id: 1,
    name: 'Pets',
    title: 'Pets',
    icon: <MaterialIcons name='pets' size={20} color='#64BC52' />,
    component: PetsPage
  }
]

function CustomDrawerContent(props) {

  function _backLoginPage() {
    AsyncStorage.removeItem('auth');
    AsyncStorage.removeItem('user');
    props.navigation.navigate('Login');
  }
  
  return (
    <VStack flex={1} >

      <Box pt={10} w='100%' h='20%' flexDirection='row' justifyContent='center' borderColor='green.btn' borderTopWidth='1'>
        <Box flex='1' alignItems='center' justifyContent='center'>
          <Logo width={100} height={100} alt='Logo da unesc' />
          <Texto>
            {props.user && `Olá ${props.user.nome}`}
          </Texto>
        </Box>
      </Box>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Box w='100%' h='10%' flexDirection='row' justifyContent='center' borderColor='green.sGreenUnesc' borderTopWidth='1'>
        <Box flex='1' alignItems='center' justifyContent='center' flexDirection='row'>
          <Ionicons name="log-out-outline" size={20} color='#64BC52' onPress={_backLoginPage} />
          <TouchableOpacity onPress={_backLoginPage}>
            <Texto fontSize={20} paddingLeft='4%'>
              Sair
            </Texto>
          </TouchableOpacity>
        </Box>
      </Box>
    </VStack>
  );
}

export default function MainPage({ navigation }) {

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
      AsyncStorage.getItem('user').then(response => {
          setUser(JSON.parse(response));
      });
  }, []);

  return (
    <Drawer.Navigator initialRouteName='Mapa' drawerContent={(props) => <CustomDrawerContent user={user} parentNavigation={navigation} {...props} />}>
      {
        tabs.map(tab => {
          return <Drawer.Screen
            key={tab.id}
            name={tab.name}
            component={tab.component}
            options={{
              title: tab.title,
              drawerInactiveTintColor: '#64BC52',
              drawerActiveTintColor: '#64BC52',
              drawerType: 'slide',
              drawerIcon: () => tab.icon
            }} />
        })
      }
    </Drawer.Navigator>
  );
}