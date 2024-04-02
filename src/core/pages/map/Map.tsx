import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { styles } from "../../../styles/styles";
import { useEffect, useState } from "react";
import { requestForegroundPermissionsAsync } from "expo-location";
import Loading from "../../../components/Loading";

export default function Map() {

    const [loaded, setLoaded] = useState(false);

    async function requestPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            loadPostions();
        }
    }

    function loadPostions() {
        setTimeout(() => {
            setLoaded(true);
        }, 3000)
    }

    useEffect(() => {
        requestPermission();
    }, []);

    return (
        <Loading loaded={loaded}>
            <MapView
                style={styles.map}
                zoomEnabled={true}
                scrollEnabled={true}
                showsUserLocation={true}
                camera = {
                    {
                        zoom: 0.0005,
                        center: {
                            latitude: -28.600295454383254,
                            longitude: -49.42493099031987
                        },
                        pitch: 0,
                        heading: 0
                    }
                }
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
        </Loading>
    )
}




/**/