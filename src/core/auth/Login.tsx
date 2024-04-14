import {  Box, Button, FormControl, KeyboardAvoidingView, Link, Text, VStack, View } from "native-base";
import { Logo } from "../../components/SystemLogo";
import { TouchableOpacity } from "react-native";
import { Texto } from "../../components/Texto";
import { Input } from "../../components/Input";

export default function Login({ navigation }) {
    return (
        <KeyboardAvoidingView behavior="padding" flex='1' alignItems='center' justifyContent='center' p='10' backgroundColor='white' pb={10}>
            <Logo mb="50"/>
            <Box >
                <FormControl>
                    <Input label="E-mail"/>
                    <Input label="Senha"/>
                </FormControl>
            </Box>
            <Button w='100%' bg='green.sGreenUnesc' mt='10' borderRadius='lg' shadow='3' onPress={() => navigation.navigate('MainPage')}>
                <Texto color={'white'}>Entrar</Texto>
            </Button>
            <Box w='100%' flexDirection='row' justifyContent='center' mt='5'>
                <Texto bold={false}>
                    Ainda não é usuário?
                </Texto>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Texto> Cadastrar-se</Texto>
                </TouchableOpacity>
            </Box>
        </KeyboardAvoidingView>
    );
}