import { Box, Button, KeyboardAvoidingView } from "native-base";
import { Logo } from "../../components/SystemLogo";
import { TouchableOpacity } from "react-native";
import { Texto } from "../../components/Texto";
import { Input } from "../../components/Input";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";

const loginSchema = yup.object({
    email: yup
        .string()
        .required('Informe o e-mail')
        .email('E-mail inválido'),
    senha: yup
        .string()
        .required('Informe sua senha')
        .min(6, 'A senha deve ter no mínimo 6 caractéres')
});

export default function Login({ navigation }) {

    const { control, resetField, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    function handleRegister(data: FormProps) {
    }
    
    return (
        <KeyboardAvoidingView behavior="padding" flex='1' alignItems='center' justifyContent='center' p='10' backgroundColor='white' pb={10}>
            <Logo mb="50" />
            <Box >
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange } }) => (
                        <Input label="E-mail" onChangeText={onChange} errorMessage={errors.email?.message} />
                    )} />
                <Controller
                    control={control}
                    name="senha"
                    render={({ field: { onChange } }) => (
                        <Input label="Senha" secureTextEntry onChangeText={onChange} errorMessage={errors.senha?.message} />
                    )} />
            </Box>
            <Button w='100%' bg='green.sGreenUnesc' mt='10' borderRadius='lg' shadow='3' onPress={handleSubmit(handleRegister)}>
                <Texto color='white'>Entrar</Texto>
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

type FormProps = {
    email: string,
    senha: string
}