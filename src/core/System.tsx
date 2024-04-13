import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './auth/Login';
import MainPage from './pages/MainPage';
import Register from './auth/Register';

const Tab = createNativeStackNavigator();

const tabs = [
    {
        id: 0,
        name:'Login',
        component: Login
    },
    {
        id: 1,
        name:'Register',
        component: Register
    },
    {
        id: 2,
        name:'MainPage',
        component: MainPage
    }
]



export default function SystemPages() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                {
                    tabs.map((tab) => {
                        return <Tab.Screen 
                            key={tab.id}
                            component={tab.component}
                            name={tab.name}
                            options={{headerShown: false}}
                    />
                    })
                }
            </Tab.Navigator>
        </NavigationContainer>
    )
}