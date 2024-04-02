import {  Box, Button, FormControl, Input, Link, Text, VStack, View } from "native-base";
import { Logo } from "../../components/SystemLogo";
import { TouchableOpacity } from "react-native";
import { Texto } from "../../components/Texto";

export default function Login({ navigation }) {
    return (
        <VStack flex='1' alignItems='center' justifyContent='center' p='10' mb={10} backgroundColor='white'>
            <Logo mb="50"/>
            <Box >
                <FormControl>
                    <FormControl.Label color='green.txt'>
                        <Texto>
                            Usuário
                        </Texto>
                    </FormControl.Label>
                    <Input w='100%' borderRadius='lg' borderColor='green.btn' placeholder="EX: WhereIsMyUnes123" placeholderTextColor='green.txt'/>
                    <FormControl.Label>
                        <Texto>Senha</Texto>
                    </FormControl.Label>
                    <Input w='100%' borderRadius='lg' borderColor='green.btn' placeholder="EX: Minhasenha123" placeholderTextColor='green.txt'/>
                </FormControl>
            </Box>
            <Box w='100%'>
                <TouchableOpacity>
                    <Texto textAlign='right'>
                        Esqueci minha senha
                    </Texto>
                </TouchableOpacity>
            </Box>
            <Button w='100%' bg='green.btn' mt='10' borderRadius='lg' shadow='3' onPress={() => navigation.navigate('MainPage')}>
                Entrar
            </Button>
            <Box w='100%' flexDirection='row' justifyContent='center' mt='5'>
                <Texto bold={false}>
                    Ainda não é usuário?
                </Texto>
                <TouchableOpacity>
                    <Texto> Cadastrar-se</Texto>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}