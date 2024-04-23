import { Box, Checkbox, Image, Text, VStack } from "native-base";
import { Swipeable } from "react-native-gesture-handler";
import { styles } from "../../../../styles/styles";
import { Ionicons } from '@expo/vector-icons';
import { Texto } from "../../../../components/Texto";
import { Masks, formatWithMask } from "react-native-mask-input";

export default function PetBox (props) {
    return (
        <Swipeable 
            renderLeftActions={() => leftSwipe({index: props?.data?.index, removeAnimal: props?.removeAnimal})} 
            containerStyle={styles.petLineContainer}>
            <Box flexDirection='row'>
                <VStack w='30%'  h='100%' backgroundColor='#e6eff8'>
                    <Image w='80%' h='80%' margin='auto' source={props.data.item.icon} alt='Logo da unesc' 
                    borderRadius={60} borderWidth={2} borderColor={'black'}/>
                </VStack>
                <VStack w='60%' h='100%' display='flex' justifyContent='center' backgroundColor='#e6eff8'>
                    <Texto fontSize={20}>
                        {props?.data?.item?.nome}
                    </Texto>
                    <Texto fontSize={16} bold={false}>
                    {
                        formatWithMask({
                            text: props.data.item.numero,
                            mask: Masks.BRL_PHONE,
                        }).masked
                    }
                    </Texto>
                </VStack>
                <VStack w='30%'  h='100%' backgroundColor='#e6eff8' flex={1} justifyContent={'center'}>
                    <Checkbox value="true" 
                        colorScheme={'green'} 
                        aria-label="#" 
                        isChecked={props.data.item.rastreando == true} 
                        onTouchStart={() => props?.checkAnimal(props?.data?.index)}>
                    </Checkbox>
                </VStack>
            </Box>
        </Swipeable>
    );
}

interface SwipeProps  {
    index: Number,
    removeAnimal?: Function
}

const leftSwipe = ({index, removeAnimal} : SwipeProps) => {

    return (
        <VStack display='flex' justifyContent='center' alignItems='center' w='16%' backgroundColor='red.100' onTouchStart={() => removeAnimal(index)}>
            <Ionicons name='trash' size={20} color='#FC7262'/>
        </VStack>
    )
}