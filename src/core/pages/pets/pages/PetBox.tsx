import { Box, Image, Text, VStack, View } from "native-base";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Texto } from "../../../../components/Texto";
import { Masks, formatWithMask } from "react-native-mask-input";
import { TouchableOpacity } from "react-native";
import api from "../../../../components/Api";
import { styles } from "../../../../styles/styles";
import { DefaultPetLogo } from "../../../../components/DefaultPetLogo";

export default function PetBox(props) {

    function findPet() {
        api.postAuth(`petsLocation/sendSmsGetLocation/${props?.data?.item?.id}`, null);
    }

    return (
        <Swipeable containerStyle={styles.petLineContainer}>
            <Box flexDirection='row'>
                <VStack w='30%' h='100%' backgroundColor='#e6eff8'>
                    {
                        props.data.item.imagem != null ?
                            <DefaultPetLogo
                                w='80%' h='80%'
                                margin='auto'
                                borderRadius={60}
                                borderWidth={2}
                                borderColor='black'
                                source={{ uri: `data:image/jpeg;base64,${props.data.item.imagem}` }} />
                            :
                            <DefaultPetLogo
                                w='80%' h='80%'
                                margin='auto'
                                borderRadius={60}
                                borderWidth={2}
                                borderColor='black'/>
                    }
                </VStack>
                <VStack w='50%' h='100%' display='flex' justifyContent='center' backgroundColor='#e6eff8'>
                    <Texto fontSize={20} numberOfLines={1} ellipsizeMode="tail">
                        {props?.data?.item?.nome}
                    </Texto>
                    <Texto fontSize={16} bold={false}>
                        {
                            formatWithMask({
                                text: props.data.item.telefone,
                                mask: Masks.BRL_PHONE,
                            }).masked
                        }
                    </Texto>
                </VStack>
                <VStack w='40%' h='100%' backgroundColor='#e6eff8' flex={1} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} >
                    <TouchableOpacity style={{ paddingRight: 15 }} onPress={findPet}>
                        <MaterialIcons name="pin-drop" size={25} color={'#0ABF04'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props?.removeAnimal(props?.data?.index)}>
                        <Ionicons name='trash' size={25} color='#FC7262' />
                    </TouchableOpacity>
                </VStack>
            </Box>
        </Swipeable>
    );
}