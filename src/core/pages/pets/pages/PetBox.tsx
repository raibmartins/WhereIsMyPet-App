import { Box, Image, VStack } from "native-base";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Texto } from "../../../../components/Texto";
import { Masks, formatWithMask } from "react-native-mask-input";
import {  TouchableOpacity } from "react-native";
import api from "../../../../components/Api";
import { styles } from "../../../../styles/styles";
import { DefaultPetLogo } from "../../../../components/DefaultPetLogo";
import MyToast from "../../../../components/MyToast";

export default function PetBox(props) {

    function findPet() {
        api.postAuth(`petsLocation/sendSmsGetLocation/${props?.data?.item?.id}`, null).then(response => {
            if (response != null) {
                MyToast.success('Localização solicitada com sucesso.');
            }
        });
    }

    return (
         <VStack style={styles.petLineContainer}>
             <Box flexDirection='row'>
                 <VStack w='30%' h='100%'>
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
                 <VStack w='50%' h='100%' display='flex' justifyContent='center'>
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
                 <VStack w='40%' h='100%' flex={1} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} >
                     <TouchableOpacity style={{ paddingRight: 15 }} onPress={findPet}>
                         <Image alt="teste" source={require('../../../../assets/google-maps.png')} width={5} height={5}></Image>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => props?.removeAnimal(props?.data?.index)}>
                         <Ionicons name='trash' size={25} color='#FC7262' />
                     </TouchableOpacity>
                 </VStack>
             </Box>
         </VStack>
     );
}