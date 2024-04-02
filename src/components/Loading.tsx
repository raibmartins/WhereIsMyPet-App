import { Text, VStack } from 'native-base';
import LottieView from 'lottie-react-native'
import { ReactNode } from 'react';
import { styles } from '../styles/styles';

interface LoadingProps {
    loaded: Boolean,
    children: ReactNode
}


export default function Loading({loaded, children} : LoadingProps) {
    return (
        <>
            {
                loaded ? 
                children
                :
                <VStack style={styles.loading}>
                    <LottieView style={{width:100, height:100}} source={require('../assets/animacao.json')} autoPlay={true} loop={true}/>
                </VStack> 
            }
        </>
    )
}