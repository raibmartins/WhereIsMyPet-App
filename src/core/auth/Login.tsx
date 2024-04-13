import { Box, Button, Center, FormControl, KeyboardAvoidingView, Link, Text, VStack, View } from "native-base";
import { Logo } from "../../components/SystemLogo";
import { Dimensions, TouchableOpacity } from "react-native";
import { Texto } from "../../components/Texto";
import { Input } from "../../components/Input";

export default function Login({ navigation }) {

    const { height, width } = Dimensions.get('window');

    return (
        <KeyboardAvoidingView h={height} behavior="padding" p='10'>
            <Center h='100%'>
                <Center shadow={5} borderRadius={80} borderWidth={1}
                    borderColor={'green.wGreenUnesc'} backgroundColor='white' padding={10}>
                    <Logo mb="30" />
                    <Box>
                        <FormControl>
                            <Input label="E-mail" />
                            <Input label="Senha" />
                            <Button
                                display={'block'}
                                bg='green.sGreenUnesc'
                                mt='10'
                                borderRadius='lg'
                                shadow='3'
                                onPress={() => navigation.navigate('MainPage')}>
                                <Texto color={'white'}>Entrar</Texto>
                            </Button>
                        </FormControl>
                    </Box>
                    <Box w='100%' flexDirection='row' justifyContent='center' mt='10'>
                        <Texto bold={false}>
                            Ainda não é usuário?
                        </Texto>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Texto> Cadastrar-se</Texto>
                        </TouchableOpacity>
                    </Box>
                </Center>
            </Center>
        </KeyboardAvoidingView>
    );
}