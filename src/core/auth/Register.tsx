import { Box, Button, Center, FormControl, KeyboardAvoidingView } from "native-base";
import { Logo } from "../../components/SystemLogo";
import { Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from "../../components/Input";
import { Texto } from "../../components/Texto";

export default function Register({ navigation }) {


    const { height, width } = Dimensions.get('window');


    return (
        <>
            <Box h={'10%'} flexDirection='row' pl={5} pt='15%'>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <MaterialIcons name='arrow-back' size={30} color='green.sGreenUnesc' />
                </TouchableOpacity>
            </Box>
            <KeyboardAvoidingView h={'70%'} behavior="padding" p='10'>
                <Center h='100%'>
                    <Center shadow={5} borderRadius={80} borderWidth={1}
                        borderColor={'green.wGreenUnesc'} backgroundColor='white' padding={10}>
                        <Logo mb="30" />
                        <Box>

                            <FormControl>
                                <Input label="Nome" />
                                <Input label="E-mail" />
                                <Input label="Senha" type="password" />
                                <Input label="Repita sua senha" type="password" />
                                <Button bg='green.sGreenUnesc' mt='10' borderRadius='lg' shadow='3' onPress={() => navigation.navigate('MainPage')}>
                                    <Texto color={'white'}>
                                        Registrar-se
                                    </Texto>
                                </Button>
                            </FormControl>
                        </Box>

                    </Center>
                </Center>
            </KeyboardAvoidingView>
        </>
    );
}