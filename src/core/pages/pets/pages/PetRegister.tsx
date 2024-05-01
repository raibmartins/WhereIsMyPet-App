import { Box, Button, Center, Image, KeyboardAvoidingView } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useEffect, useState } from "react";
import { Input } from "../../../../components/Input";
import { Texto } from "../../../../components/Texto";
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from "react-native-gesture-handler";
import { DefaultPetLogo } from "../../../../components/DefaultPetLogo";
import { TextInputMask } from "react-native-masked-text";
import api from "../../../../components/Api";
import MyToast from "../../../../components/MyToast";

const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

const registerSchema = yup.object({
    imagem: yup.string(),
    nome: yup
        .string()
        .required('Informe o nome'),
    telefone: yup
        .string()
        .matches(new RegExp(telefoneRegex), {message: 'O telefone deve estar no formato (48) 99999-9999'})
        .required('Informe o telefone')
});

export default function PetRegister({ navigation }) {

    const { control, reset, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(registerSchema)
    });

    async function handleRegister(data: FormProps) {
        data.telefone = data.telefone.replace('(', '').replace(')', '').replace('-', '').replaceAll(' ', '');
        data.excluido = false;
        api.postAuth('pets', data).then(response => {
            if (response != null && response.id != null) {
                MyToast.success('Animal salvo com sucesso!');
                navigation.navigate('pets');
            }
        });
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        if (!result.canceled) {
            setValue('imagem', result.assets[0].base64);
        }
    };

    useEffect(() => {
        //reset();
    }, []);

    return (
        <>
            <KeyboardAvoidingView h='100%' behavior="padding" pt={10} pb='10' pl={10} pr={10} backgroundColor='white'>
                <Center>
                    <Texto fontSize={20} pb={2}>
                        Adicionando animal
                    </Texto>
                    <Controller
                        control={control}
                        name="imagem"
                        render={({ field: { value } }) => (
                            <TouchableOpacity onPress={pickImage}>
                                {
                                    value != null ?
                                    <DefaultPetLogo alt="petImage"
                                        borderRadius={40}
                                        borderWidth={2}
                                        borderColor='black'
                                        source={{ uri: `data:image/jpeg;base64,${value}` }}
                                        mb={10} />
                                    :
                                    <DefaultPetLogo alt="petImage"
                                        borderRadius={40}
                                        borderWidth={2}
                                        borderColor='black'
                                        mb={10} />
                                }
                            </TouchableOpacity>
                        )} />

                    <Controller
                        control={control}
                        name="nome"
                        render={({ field: { value, onChange } }) => (
                            <Input label="Nome" value={value} onChangeText={onChange} errorMessage={errors.nome?.message} />
                        )} />
                    <Controller
                        control={control}
                        name="telefone"
                        render={({ field: { value, onChange } }) => (
                            <Input label="Telefone" value={value} onChangeText={onChange} errorMessage={errors.telefone?.message} />
                        )} />
                    <Button w='100%'
                        bg='green.sGreenUnesc'
                        mt='5'
                        borderRadius='lg'
                        shadow='3'
                        onPress={handleSubmit(handleRegister)}>
                        <Texto color={'white'}>
                            Salvar
                        </Texto>
                    </Button>
                    <Button w='100%'
                        bg='red.redUnesc'
                        mt='2'
                        borderRadius='lg'
                        shadow='3'
                        onPress={() => navigation.navigate('pets', {reload: true})}>
                        <Texto color={'white'}>
                            Cancelar
                        </Texto>
                    </Button>
                </Center>
            </KeyboardAvoidingView>
        </>
    );
}


type FormProps = {
    nome: string,
    telefone: string,
    imagem: string,
    excluido: boolean
}
