
import { Button, FlatList, VStack } from "native-base";
import { useState } from "react";
import PetBox from "./PetBox";
import Icon from '../../../assets/gatinho.jpg';
import Icon2 from '../../../assets/gatinho2.jpg';
import Toast from "react-native-root-toast";

export default function Pets() {

    const [refresh, setRefresh] = useState(false);
    const [pets, setPets] = useState([]);
    const [toast, setToast] = useState(null);


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

        if (toast != null) {
            Toast.hide(toast);
        }

        let newToast = Toast.show(`Você ${pets[index].rastreando ? 'começou a' : 'parou de'} rastrear seu animal`, {
            duration: Toast.durations.LONG,
            backgroundColor: '#90d02c',
            textColor: 'black',
            containerStyle: {
                height: 60,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 1
            }
        });

        setToast(newToast);

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
                    return <PetBox data={item} removeAnimal={removeAnimal} checkAnimal={checkAnimal}/>
                }}
            />
        </VStack>
    )
}
