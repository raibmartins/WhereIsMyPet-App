
import { Button, FlatList, VStack } from "native-base";
import { useState } from "react";
import PetBox from "./PetBox";
import Loading from "../../../../components/Loading";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import api from "../../../../components/Api";

export default function Pets({ navigation }) {

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
            setPets([]);
        }
    });

    function loadAnimais() {
        api.get('pets').then(response => {
            setPetsLoaded(true);
            setLoaded(true);
            setPets(response);
            console.log(response)
        })
    }

    function addAnimal() {
        navigation.navigate('petsRegister')
      /*   let newPets = pets;
        let petId = newPets.length === 0 ? 1 : newPets[newPets.length - 1].id + 1;
        newPets.push(
            {
                id: petId,
                nome: 'Gatin',
                numero: '4899999999',
                icon: petId % 2 === 0 ? Icon : Icon2,
                rastreando: true
            }
        );
        setPets(newPets);
        changeRefresh();*/
    }
    
    function removeAnimal(index) {
     /*   pets.splice(index, 1);
        changeRefresh();*/
    }

    function checkAnimal(index) {
    /*    pets[index].rastreando = !pets[index].rastreando;

        MyToast.info(`Você ${pets[index].rastreando ? 'começou a' : 'parou de'} rastrear seu animal`);

        changeRefresh();*/
    }

    function changeRefresh() {
  //      setRefresh(!refresh);
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
                        return <PetBox data={item} removeAnimal={removeAnimal} checkAnimal={checkAnimal}/>
                    }}
                />
            </VStack>
        </Loading>
    )
}
