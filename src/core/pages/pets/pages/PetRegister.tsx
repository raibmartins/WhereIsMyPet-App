import { Box, Button, Center, Image, KeyboardAvoidingView } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useState } from "react";
import { Input } from "../../../../components/Input";
import { Texto } from "../../../../components/Texto";
import * as ImagePicker from 'expo-image-picker';

const registerSchema = yup.object({
    nome: yup
        .string()
        .required('Informe o nome'),
    telefone: yup
        .string()
        .required('Informe o telefone')
});

export default function PetRegister({ navigation }) {

    const [image, setImage] = useState(null);

    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    async function handleRegister(data: FormProps) {
        console.log(data)
    }
    

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true
        });
    
        if (!result.canceled) {
            setImage(result.assets[0].base64);
        }
      };

    return (
        <>
            <KeyboardAvoidingView h='100%' behavior="padding" pt={10} pb='10' pl={10} pr={10} backgroundColor='white'>
                <Center>
                    <Box>
                        <>
                            <Button mb={10} onPress={pickImage} />{image && <Image alt="petImage" source={{ uri: image }} style={{width: 100, height: 100}}/>}
                        </>
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
                                <Input label="Nome" value={value} onChangeText={onChange} errorMessage={errors.nome?.message} />
                            )} />
                    </Box>
                    <Button w='100%'
                        bg='green.sGreenUnesc'
                        mt='10'
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
                        onPress={handleSubmit(handleRegister)}>
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
    telefone: string
}
