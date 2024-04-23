import { NavigationContainer, useFocusEffect, useIsFocused } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pets from "./pages/Pets";
import { useState } from "react";
import Loading from "../../../components/Loading";

const Tab = createNativeStackNavigator();

const tabs = [
    {
        id: 0,
        name: 'pets',
        component: Pets
    }
]

export default function PetsPage() {

    const [loaded, setLoaded] = useState(false);

    const isFocused = useIsFocused();

    useFocusEffect(() => {
        if (isFocused) {
            setTimeout(() => {
                setLoaded(true)
            }, 2000)
        } else {
            setLoaded(false)
        }
    });

    return (
        <Loading loaded={loaded} description="Carregando seus animais">
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
        </Loading>
    )
}