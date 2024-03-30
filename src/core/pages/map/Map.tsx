import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { stylesMap } from "../../../styles/styles";
import { useEffect, useState } from "react";
import { requestForegroundPermissionsAsync } from "expo-location";
import { Text, VStack } from "native-base";
import { Loading } from "../../../components/Loading";

export default function Map() {

    const [hasPermission, setHasPermission] = useState(false);
    const [loaded, setLoaded] = useState(false);

    async function requestPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            setHasPermission(true);
            loadPostions();
        }
    }

    async function loadPostions() {
        setTimeout(() => {
            setLoaded(true);
        }, 1000)
    }

    useEffect(() => {
        requestPermission();
    }, []);

    return (
        <>
            {
                loaded ?
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={stylesMap.map}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: -28.600295454383254,
                        longitude: -49.42493099031987,
                        latitudeDelta: 0.0005,
                        longitudeDelta: 0.0005,
                    }}
                    >
                    <Marker coordinate={{latitude: -28.600295454383254,
                                        longitude: -49.42493099031987}}/>
                </MapView> 
                :
                <Loading/>
            }
        </>
    )
}




/**/