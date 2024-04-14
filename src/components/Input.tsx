
import { FormControl, IInputProps, Input as NbInput } from "native-base"
import { Texto } from "./Texto"

interface InputProps extends IInputProps {
    label?: string | null,
    errorMessage?: String | null
}

export function Input({errorMessage = null, isInvalid, ...rest} : InputProps) {
    const invalid = !!errorMessage || isInvalid;

    return (
        <FormControl isInvalid={invalid} mb={3}>
            <NbInput 
                {...rest}
                w='100%' 
                isInvalid={invalid}
                borderRadius='lg' 
                placeholder={rest.label}
                placeholderTextColor={'green.sGreenUnesc'}
                borderColor='green.sGreenUnesc' 
                _invalid={{
                    borderWidth: 1,
                    borderColor: 'red.redUnesc',
                    placeholderTextColor: 'red.redUnesc'
                }}
                _focus={{
                    bg: 'green.swGreenUnesc',
                    borderColor: 'green.sGreenUnesc'
                }}/>
            <FormControl.ErrorMessage>
                <Texto color='red.redUnesc'>{errorMessage}</Texto>
            </FormControl.ErrorMessage>
        </FormControl>
    )
}