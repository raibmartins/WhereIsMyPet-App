import MapView, { Callout, Marker } from "react-native-maps";
import { styles } from "../../../styles/styles";
import { useEffect, useState } from "react";
import { requestForegroundPermissionsAsync } from "expo-location";
import Loading from "../../../components/Loading";
import { Box, VStack } from "native-base";
import { Texto } from "../../../components/Texto";

import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import api from "../../../components/Api";
import moment from "moment";


export default function Map() {

    const [loaded, setLoaded] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [locationsLoaded, setLocationsLoaded] = useState(false);
    const isFocused = useIsFocused();
                
    useFocusEffect(() => {
        if (isFocused) {
            if (!locationsLoaded) {
                _loadMarkers();   
            }
        } else {
            setMarkers([]);
            setLoaded(false)
            setLocationsLoaded(false);
        }
    });

    function _loadMarkers() {
        setLocationsLoaded(true);
        setMarkers([]);
        api.get('petsLocation').then(locations => {
            if (locations != null) {
                locations.forEach(_addMarker);
            }
            setLoaded(true)
        })
    }

    function _addMarker(marker : MarkerProps): void {
        console.log(markers)
        const newMarker = markers;
        newMarker.push(marker);
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
                    latitude: markers[0] != null ? parseFloat(markers[0].latitude) : null,
                    longitude: markers[0] != null ? parseFloat(markers[0].longitude) : null,
                    latitudeDelta: LATITUD_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }}
            >
                {
                    markers[0] != null && markers.map((marker, index) => {
                        console.log(marker)
                        return <Marker
                                key={index}
                                coordinate={{
                                    latitude: parseFloat(marker.latitude),
                                    longitude: parseFloat(marker.longitude)
                                }} >
                                <Callout tooltip={true}>
                                    <CustomCalloutView marker={marker}/>
                                </Callout>
                            </Marker>
                    })
                }
            </MapView>
        </Loading>
    )
}

const CustomCalloutView = ({marker}) => (
    <VStack padding={2} mb={2} w={150} h={150} style={{ backgroundColor: '#f5f3f1', borderRadius: 20, borderWidth: 1, borderColor: '#64BC52' }}>
        <Box w='100%' style={{ display: 'flex', alignItems: 'center' }}>
            <Texto style={{ marginLeft: 'auto' }}>{marker.bateria} <Ionicons size={13} name="battery-half" /></Texto>
        </Box>
        <VStack flex={1} alignItems='center' justifyContent='center'>
            <Texto>
                Última localização
            </Texto>
            <Texto bold={false}>
                {moment(marker.dataHoraPosicao).format('DD/MM/YYYY')}
            </Texto>
            <Texto bold={false}>
            {moment(marker.dataHoraPosicao).format('HH:mm')}
            </Texto>
        </VStack>
    </VStack>
);

type MarkerProps = {
    id: Number,
    latitude: String,
    longitude: String,
    bateria: String,
    dataHoraPosicao: String,
    pet: PetMarkerProps
}

type PetMarkerProps = {
    id : Number,
    nome : String
}