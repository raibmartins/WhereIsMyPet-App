import { NavigationContainer, useFocusEffect, useIsFocused } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pets from "./pages/Pets";
import PetRegister from "./pages/PetRegister";

const Tab = createNativeStackNavigator();

const tabs = [
    {
        id: 0,
        name: 'pets',
        component: Pets
    },
    {
        id: 1,
        name: 'petsRegister',
        component: PetRegister
    }
]

export default function PetsPage() {

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                {
                    tabs.map((tab) => {
                        return <Tab.Screen
                            key={tab.id}
                            component={tab.component}
                            name={tab.name}
                            options={{ headerShown: false }}
                        />
                    })
                }
            </Tab.Navigator>
        </NavigationContainer>
    )
}