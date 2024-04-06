import { Box, Image, Text, VStack } from "native-base";
import { Swipeable } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { styles } from "../../../styles/styles";
import { Ionicons } from '@expo/vector-icons';
import { Texto } from "../../../components/Texto";
import { Masks, formatWithMask } from "react-native-mask-input";

export default function PetBox (props) {
    return (
        <Swipeable renderLeftActions={() => leftSwipe({index: props?.data?.index, removeAnimal: props?.removeAnimal})} containerStyle={styles.petLineContainer}>
            <Box flexDirection='row'>
                <VStack w='30%'  h='100%' backgroundColor='gray.100'>
                    <Image w='80%' h='80%' margin='auto' source={props.data.item.icon} alt='Logo da unesc' 
                    borderRadius={60} borderWidth={2} borderColor={'black'}/>
                </VStack>
                <VStack w='70%' h='100%' display='flex' justifyContent='center' backgroundColor='gray.100'>
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
            </Box>
        </Swipeable>
    );
}

interface LeftSwipeProps  {
    index: Number,
    removeAnimal: Function
}

const leftSwipe = ({index, removeAnimal} : LeftSwipeProps) => {

    return (
        <VStack display='flex' justifyContent='center' alignItems='center' w='16%' backgroundColor='red.100' onTouchStart={() => removeAnimal(index)}>
            <Ionicons name='trash' size={20} color='#FC7262'/>
        </VStack>
    )
}