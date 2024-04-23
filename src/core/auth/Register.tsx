import { Box, Button, Center, FormControl, KeyboardAvoidingView } from "native-base";
import { Logo } from "../../components/SystemLogo";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from "../../components/Input";
import { Texto } from "../../components/Texto";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useEffect } from "react";
import api from "../../components/Api";
import MyToast from "../../components/MyToast";

const registerSchema = yup.object({
    nome: yup
        .string()
        .required('Informe o nome'),
    email: yup
        .string()
        .required('Informe o e-mail')
        .email('E-mail inválido'),
    senha: yup
        .string()
        .required('Informe a senha')
        .min(6, 'A senha deve ter no mínimo 6 caractéres'),
    senha_confirm: yup
        .string()
        .required('Informe a senha')
        .oneOf([yup.ref('senha'), null], 'As senha não são iguais')
});

export default function Register({ navigation }) {

    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    async function handleRegister(data: FormProps) {
        const response = await api.postNoAuth('auth/register', data);
        if (response != null) {
            reset();
            MyToast.success('Você se cadastrou com sucesso!');
            navigation.goBack();
        }
    }

    useEffect(() => {
        reset();
    }, []);

    return (
        <>
            <KeyboardAvoidingView h='100%' behavior="padding" pt={10} pb='10' pl={10} pr={10} backgroundColor='white'>
                <Center>
                    <Box w='100%' flexDirection='row'>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <MaterialIcons name='arrow-back' size={30} color='#64BC52' />
                        </TouchableOpacity>
                    </Box>
                    <Logo mb="50" />
                    <Box>
                        <Controller
                            control={control}
                            name="nome"
                            render={({ field: { value, onChange } }) => (
                                <Input label="Nome" value={value} onChangeText={onChange} errorMessage={errors.nome?.message} />
                            )} />
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { value, onChange } }) => (
                                <Input label="E-mail" value={value} onChangeText={onChange} errorMessage={errors.email?.message} />
                            )} />
                        <Controller
                            control={control}
                            name="senha"
                            render={({ field: { value, onChange } }) => (
                                <Input label="Senha" value={value} secureTextEntry onChangeText={onChange} errorMessage={errors.senha?.message} />
                            )} />
                        <Controller
                            control={control}
                            name="senha_confirm"
                            render={({ field: { value, onChange } }) => (
                                <Input label="Repita sua senha" value={value} secureTextEntry onChangeText={onChange} errorMessage={errors.senha_confirm?.message} />
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


type FormProps = {
    nome: string,
    email: string,
    senha: string,
    senha_confirm: string
}
