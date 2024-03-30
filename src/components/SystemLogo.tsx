import { Image } from "native-base";
import UnescPng from '../assets/unesc.png';

export function Logo({...rest})  {
    return (
        <Image width={100} height={100} source={UnescPng} alt='Logo da unesc' {...rest}/>
    );
}