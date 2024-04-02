import { extendTheme } from "native-base";
import { StyleSheet } from "react-native";

export const TEMAS = extendTheme({
    colors:{
        green: {
            'btn': '#64BC52',
            'txt': '#90d02c'
        },
        white: '#fff',
        black: '#000',
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
        margin: 10,
        height: 100,
        borderRadius: 15,
        borderWidth: 2
    }
});