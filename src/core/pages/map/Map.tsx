import MapView, { Callout, Marker } from "react-native-maps";
import { styles } from "../../../styles/styles";
import { useEffect, useState } from "react";
import { requestForegroundPermissionsAsync } from "expo-location";
import Loading from "../../../components/Loading";
import { Box, VStack } from "native-base";
import { Texto } from "../../../components/Texto";

import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useIsFocused } from "@react-navigation/native";


export default function Map() {

    const [loaded, setLoaded] = useState(false);
    const [markers, setMarkers] = useState([]);

    const isFocused = useIsFocused();

    useFocusEffect(() => {
        if (isFocused) {
            setTimeout(() => {
                setLoaded(true)
            }, 2000)
        } else {
            setLoaded(false)
        }
    });

    function _addMarker(marker): void {
        const newMarker = markers;
        newMarker.push(marker);
        setMarkers(newMarker);
    }

    function _removeMarker(index): void {
        const newMarker = markers;
        newMarker.splice(index, 1);
        setMarkers(newMarker);
    }

    const LATITUD_DELTA = 0.015;
    const LONGITUDE_DELTA = LATITUD_DELTA / 4;

    return (
        <Loading description="Carregando informações" loaded={loaded} map={true}>
            <MapView
                style={styles.map}
                provider="google"
                zoomEnabled={true}
                scrollEnabled={true}
                showsUserLocation={true}
                region={{
                    latitude: -28.600295454383254,
                    longitude: -49.42493099031987,
                    latitudeDelta: LATITUD_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }}
            >
                <Marker
                    coordinate={{
                        latitude: -28.600295454383254,
                        longitude: -49.42493099031987
                    }} >
                    <Callout tooltip={true}>
                        <CustomCalloutView />
                    </Callout>
                </Marker>
            </MapView>
        </Loading>
    )
}

const CustomCalloutView = () => (
    <VStack padding={2} mb={2} w={150} h={150} style={{ backgroundColor: '#f5f3f1', borderRadius: 20, borderWidth: 1, borderColor: '#64BC52' }}>
        <Box w='100%' style={{ display: 'flex', alignItems: 'center' }}>
            <Texto style={{ marginLeft: 'auto' }}>100% <Ionicons size={13} name="battery-half" /></Texto>
        </Box>
        <VStack flex={1} alignItems='center' justifyContent='center'>
            <Texto>
                Última localização
            </Texto>
            <Texto bold={false}>
                11/04/2024
            </Texto>
            <Texto bold={false}>
                22:24
            </Texto>
        </VStack>
    </VStack>
);