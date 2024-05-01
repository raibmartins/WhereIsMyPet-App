import { Image } from "native-base";
import PetPng from '../assets/default-pet.png';

export function DefaultPetLogo({...rest})  {
    return (
        <Image width={130} height={130} source={PetPng} alt='altPet' {...rest}/>
    );
}