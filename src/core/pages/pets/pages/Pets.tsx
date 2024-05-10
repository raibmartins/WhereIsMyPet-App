
import { Button, FlatList, VStack } from "native-base";
import { useState } from "react";
import PetBox from "./PetBox";
import Loading from "../../../../components/Loading";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import api from "../../../../components/Api";
import React from "react";

export default function Pets({ navigation, route }) {

    const [pets, setPets] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [petsLoaded, setPetsLoaded] = useState(false);
    const [loaded, setLoaded] = useState(false);
    
    const isFocused = useIsFocused();

    useFocusEffect(() => {
        if (isFocused) {
            if (!petsLoaded) {
                loadAnimais();
            }
        } else {
            setPetsLoaded(false);
            setPets([]);
        }
    });

    function loadAnimais() {
        api.get('pets').then(response => {
            setPetsLoaded(true);
            setLoaded(true);
            setPets(response);
        })
    }

    function addAnimal() {
        navigation.navigate('petsRegister');
    }
    
    function removeAnimal(index) {
        setLoaded(false);
        api.putAuth(`pets/excluir/${pets[index].id}`).then(() => {
            pets.splice(index, 1);
            setLoaded(true);
            changeRefresh();
        });
    }

    function changeRefresh() {
        setRefresh(!refresh);
    }

    return (
        <Loading loaded={loaded} description="Carregando seus animais">
            <VStack backgroundColor='white' h='100%'>
                <VStack flexDirection='row' justifyContent='center' w={'100%'} pt={5} pb={5}>
                    <Button onPress={addAnimal} backgroundColor='green.sGreenUnesc' w='30%'>Adicionar</Button>
                </VStack>
                <FlatList  data={pets}
                    extraData={refresh}
                    renderItem={(item) => {
                        return <PetBox data={item} removeAnimal={removeAnimal} />
                    }}
                />
            </VStack>
        </Loading>
    )
}
