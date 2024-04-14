import { Box, Button, Center, FormControl, KeyboardAvoidingView } from "native-base";
import { Logo } from "../../components/SystemLogo";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from "../../components/Input";
import { Texto } from "../../components/Texto";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

type FormProps = {
    nome: string,
    email: string,
    senha: string,
    senha_confirm: string
}

const registerSchema = yup.object({
    nome: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o e-mail'),
    senha: yup.string().required('Informe a senha'),
    senha_confirm: yup.string().required('Informe a senha')
});

export default function Register({ navigation }) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    function handleRegister(data : FormProps) {
        console.log(data);
    }

    return (
        <>
            <Box w='100%' flexDirection='row' pl={5} pt='10' backgroundColor='white'>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <MaterialIcons name='arrow-back' size={30} color='#64BC52' />
                </TouchableOpacity>
            </Box>
            <KeyboardAvoidingView behavior="padding" pt={10} pb='10' pl={10} pr={10} backgroundColor='white'>
                <Center>
                    <Logo mb="50" />
                    <Box>
                        <Controller
                            control={control}
                            name="nome"
                            render={({ field: { onChange } }) => (
                                <Input label="Nome" onChangeText={onChange} errorMessage={errors.nome?.message}/>
                            )} />
                        <Controller
                            control={control}
                            rules={
                                {
                                    required: 'Informe o email',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'E-mail inválido'
                                    }
                                }
                            }
                            name="email"
                            render={({ field: { onChange } }) => (
                                <Input label="E-mail" onChangeText={onChange} errorMessage={errors.email?.message} />
                            )} />
                        <Controller
                            control={control}
                            name="senha"
                            render={({ field: { onChange } }) => (
                                <Input label="Senha" secureTextEntry onChangeText={onChange} errorMessage={errors.senha?.message}/>
                            )} />
                        <Controller
                            control={control}
                            name="senha_confirm"
                            render={({ field: { onChange } }) => (
                                <Input label="Repita sua senha" secureTextEntry onChangeText={onChange} errorMessage={errors.senha_confirm?.message}/>
                            )} />
                    </Box>
                    <Button w='100%'
                        bg='green.sGreenUnesc'
                        mt='10'
                        borderRadius='lg'
                        shadow='3'
                        onPress={handleSubmit(handleRegister)}>
                        <Texto color={'white'}>
                            Registrar-se
                        </Texto>
                    </Button>
                </Center>
            </KeyboardAvoidingView>
        </>
    );
}