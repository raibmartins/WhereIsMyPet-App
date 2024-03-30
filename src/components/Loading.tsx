import { Circle, Svg } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue } from 'react-native-reanimated';
import { VStack } from 'native-base';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export function Loading() {

    const sharedTime = useSharedValue(0);

    const buttonProps1 = useAnimatedProps(() => {
        return {
            cx: '40',
            cy: sharedTime.value === 0 ? '65' : sharedTime.value === 1 ? '45' : '25'
        }
    });

    const buttonProps2 = useAnimatedProps(() => {
        return {
            cx: '100',
            cy: sharedTime.value === 0 ? '45' : sharedTime.value === 1 ? '25' : '65'
        }
    });

    const buttonProps3 = useAnimatedProps(() => {
        return {
            cx: '160',
            cy: sharedTime.value === 0 ? '25' : sharedTime.value === 1 ? '65' : '45'
        }
    });

    const changeTime = () => {
        if (sharedTime.value === 2) {
            sharedTime.value = 0;
        } else {
            sharedTime.value += 1;
        }
        setTimeout(() => changeTime(), 340);
    }
    changeTime();

    return (
        <VStack flex='1' justifyContent={'center'} alignItems={'center'}>
            <Svg viewBox='0 0 200 200' width='50%' height='50%'>
                <AnimatedCircle animatedProps={buttonProps1} fill='#90D02C' stroke='#90D02C' strokeWidth='15' r='15'/>
                <AnimatedCircle animatedProps={buttonProps2} fill='#90D02C' stroke='#90D02C' strokeWidth='15' r='15'/>
                <AnimatedCircle animatedProps={buttonProps3} fill='#90D02C' stroke='#90D02C' strokeWidth='15' r='15'/>
            </Svg>
        </VStack>
    )
}