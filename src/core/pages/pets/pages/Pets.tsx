
import { Button, FlatList, VStack } from "native-base";
import { useState } from "react";
import PetBox from "./PetBox";
import Icon from '../../../../assets/gatinho.jpg';
import Icon2 from '../../../../assets/gatinho2.jpg';
import MyToast from "../../../../components/MyToast";
import Loading from "../../../../components/Loading";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

export default function Pets({ navigation }) {

    const [refresh, setRefresh] = useState(false);
    const [pets, setPets] = useState([]);

    function addAnimal() {
        let newPets = pets;
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
        changeRefresh();
    }
    
    function removeAnimal(index) {
        pets.splice(index, 1);
        changeRefresh();
    }

    function checkAnimal(index) {
        pets[index].rastreando = !pets[index].rastreando;

        MyToast.info(`Você ${pets[index].rastreando ? 'começou a' : 'parou de'} rastrear seu animal`);

        changeRefresh();
    }

    function changeRefresh() {
        setRefresh(!refresh);
    }

    return (
        
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
    )
}
