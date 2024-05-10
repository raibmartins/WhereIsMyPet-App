import { extendTheme } from "native-base";
import { StyleSheet } from "react-native";

export const TEMAS = extendTheme({
    colors:{
        white: '#fff',
        black: '#000',
        green: {
            sGreenUnesc: '#0ABF04',
            wGreenUnesc: '#9FF222',
            mGreenUnesc: '#26D90B',
            swGreenUnesc: '#DCFFDC'
        },
        red: {
            redUnesc: '#FF0033',   
        }
    },
    fontSize: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    }
});

export const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    petLineContainer: {
        height: 110,
        borderBottomWidth: 2
    }
});