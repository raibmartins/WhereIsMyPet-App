import MapView, { Callout, Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { styles } from "../../../styles/styles";
import { useState } from "react";
import * as Location from 'expo-location';
import Loading from "../../../components/Loading";
import { Box, Button, VStack } from "native-base";
import { Texto } from "../../../components/Texto";
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import api from "../../../components/Api";
import moment from "moment";
import React from "react";
import { Platform } from "react-native";


export default function Map() {

    const LATITUD_DELTA = 0.015;
    const LONGITUDE_DELTA = LATITUD_DELTA / 4;

    const [loaded, setLoaded] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [locationsLoaded, setLocationsLoaded] = useState(false);
    const [region, setRegion] = useState(null);
    const isFocused = useIsFocused();

    useFocusEffect(() => {
        if (isFocused) {
            if (!locationsLoaded) {
                loadMarkers();
            }
        } else {
            setMarkers([]);
            setRegion(null);
            setLoaded(false);
            setLocationsLoaded(false);
        }
    });

    function loadMarkers() {
        setLocationsLoaded(true);
        setMarkers([]);
        setRegion(null);
        api.get('petsLocation').then((locations: Locations[]) => {
            let newRegion: Region = null;

            if (locations != null) {
                locations.map((item, index) => {
                    if (index == 0) {
                        newRegion = {
                            latitude: parseFloat(item.latitude),
                            longitude: parseFloat(item.longitude),
                            latitudeDelta: LATITUD_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        }
                    }
                });
                setMarkers(locations);
                setRegion(newRegion)
            }

            if (newRegion == null) {
                createDefaultRegion();
            } else {
                setLoaded(true);
            }
        });
    }

    function createDefaultRegion() {
        Location.requestForegroundPermissionsAsync().then(response => {
            if (response.status === 'granted') {
                Location.getCurrentPositionAsync().then(location => {
                    setRegion({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: LATITUD_DELTA,
                        longitudeDelta: LONGITUDE_DELTA
                    });
                    setLoaded(true);
                })
            } else {
                setLoaded(true);
            }
        });
    }

    return (
        <Loading description="Carregando informações" loaded={loaded} map={true}>
            <VStack style={{ flex: 1 }}>
                <MapView
                    style={styles.map}
                    provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    showsUserLocation={true}
                    region={region}
                >
                    {
                        markers[0] != null && markers.map((marker) => {
                            return <Marker
                                key={marker.id}
                                coordinate={{
                                    latitude: parseFloat(marker.latitude),
                                    longitude: parseFloat(marker.longitude)
                                }} >
                                <Callout tooltip={true}>
                                    <CustomCalloutView marker={marker} />
                                </Callout>
                            </Marker>
                        })
                    }
                </MapView>
                <Button bg='green.sGreenUnesc' borderRadius='lg' margin={5} shadow='3' style={{
                    position: 'absolute',
                    alignSelf: 'flex-start'
                }} onPress={() => { 
                        setLoaded(false);
                        loadMarkers(); 
                    }}>
                    <Ionicons name='reload' size={25} color={'white'} />
                </Button>
            </VStack>
        </Loading>
    )
}

const CustomCalloutView = ({ marker }) => (
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

