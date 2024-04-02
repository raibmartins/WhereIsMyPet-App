
import { Button, FlatList, VStack } from "native-base";
import { useState } from "react";
import PetBox from "./PetBox";
import Icon from '../../../assets/gatinho.jpg';
import Icon2 from '../../../assets/gatinho2.jpg';

var pets = []

export default function Pets() {

    const [refresh, setRefresh] = useState(false);

    function addAnimal() {
        let petId = pets.length === 0 ? 1 : pets[pets.length - 1].id + 1;
        pets.push(
            {
                id: petId,
                nome: 'Gatin',
                numero: '4899999999',
                icon: petId % 2 === 0 ? Icon : Icon2
            }
        );
        changeRefresh();
    }
    
    function removeAnimal(index) {
        pets.splice(index, 1);
        changeRefresh();
    }

    function changeRefresh() {
        setRefresh(!refresh);
    }

    return (
        <VStack backgroundColor='white' h='100%'>

            <VStack flexDirection='row' justifyContent='center' w={'100%'} pt={5} pb={5}>
                <Button onPress={addAnimal} backgroundColor='green.btn' w='30%'>Adicionar</Button>
            </VStack>

            <FlatList  data={pets}
                extraData={refresh}
                renderItem={(item) => {
                    return <PetBox data={item} removeAnimal={removeAnimal}/>
                }}
            />
        </VStack>
    )
}
