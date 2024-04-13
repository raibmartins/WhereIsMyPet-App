import {  Box, Button, Center, FormControl, KeyboardAvoidingView} from "native-base";
import { Logo } from "../../components/SystemLogo";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from "../../components/Input";
import { Texto } from "../../components/Texto";

export default function Register({ navigation }) {
    return (
        <>
             <Box w='100%' flexDirection='row' pl={5} pt='10' backgroundColor='white'>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <MaterialIcons name='arrow-back' size={30} color='#64BC52'/>
                </TouchableOpacity>
            </Box>
            <KeyboardAvoidingView behavior="padding" pt={10} pb='10' pl={10} pr={10} backgroundColor='white'>
                <Center>
                    <Logo mb="50"/>
                    <Box>
                        <FormControl>
                            <FormControl>
                                <Input label="Nome"/>
                                <Input label="E-mail"/>
                                <Input label="Senha" type="password"/>
                                <Input label="Repita sua senha" type="password"/>
                            </FormControl>
                        </FormControl>
                    </Box>
                    <Button w='100%' bg='green.sGreenUnesc' mt='10' borderRadius='lg' shadow='3' onPress={() => navigation.navigate('MainPage')}>
                        <Texto color={'white'}>
                            Registrar-se
                        </Texto>
                    </Button>
                </Center>
            </KeyboardAvoidingView>
        </>
    );
}