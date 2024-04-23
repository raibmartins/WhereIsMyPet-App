import { VStack } from 'native-base';
import LottieView from 'lottie-react-native'

import { ReactNode } from 'react';
import { styles } from '../styles/styles';
import { Texto } from './Texto';

interface LoadingProps {
    loaded: Boolean,
    children: ReactNode,
    description?: string,
    map?: Boolean
}


export default function Loading(props : LoadingProps) {
    return (
        <>
            {
                props.loaded ? 
                props.children
                :
                <VStack style={styles.loading}>
                    {props.description && <Texto fontSize={25}>{props.description}</Texto>}
                    {props.map && <LottieView style={{ width: '80%', height: '80%'}} source={require('../assets/anim-map.json')} autoPlay={true} loop={true}/>}
                    {!props.map && <LottieView style={{width: '80%', height: '80%'}} source={require('../assets/anim-load.json')} autoPlay={true} loop={true}/>}
                </VStack> 
            }
        </>
    )
}