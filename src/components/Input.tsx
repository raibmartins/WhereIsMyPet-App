
import { FormControl, IInputProps, Input as NbInput } from "native-base"
import { Texto } from "./Texto"
import { border } from "native-base/lib/typescript/theme/styled-system"

interface InputProps extends IInputProps {
    label?: String
}

export function Input({...rest} : InputProps) {
    return (
        <>
            {
                rest.label ?
                <FormControl.Label>
                    <Texto>{rest.label}</Texto>
                </FormControl.Label>
                : null
            }
            <NbInput 
                {...rest}
                w='100%' 
                borderRadius='lg' 
                borderColor='green.sGreenUnesc' 
                _focus={{
                    bg: 'green.swGreenUnesc',
                    borderColor: 'green.sGreenUnesc'
                }}/>
        </>
    )
}