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

export const stylesMap = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%'
    }
});

export const stylesLoading = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%'
    }
});