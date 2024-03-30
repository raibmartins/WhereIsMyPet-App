import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface TextoProps extends ITextProps {
    children: ReactNode
}

export function Texto({children, ...rest} : TextoProps )  {
    return (
        <Text color='green.txt' bold={true} fontSize={13} {...rest}>
            {children}
        </Text>
    );
}