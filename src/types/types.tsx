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

type Locations = {
    bateria: string,
    dataHoraPosicao: string,
    id: Number,
    latitude: string,
    longitude: string,
    pet: PetMarkerProps   
}
