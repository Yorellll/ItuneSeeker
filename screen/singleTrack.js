import DetailedTrack from "../components/DetailedTrack";
import {View} from "react-native";
import {singleTrackScreenStyle} from "../stylesheet/singleTrackScreenStyle";

//Ici la vue de l'écran détaillé des musiques
export default function singleTrackScreen({route}) {
    //Ici, on récupère la musique transmise dans la route
    const track = route.params.track.item;

    return (
        //Ici la vue retourné
        <View style={singleTrackScreenStyle.container}>
            {/*Ici le composant DetailedTrack fait par moi même, on lui transmet la musique récupérer dans la route*/}
        <DetailedTrack track={track}></DetailedTrack>
        </View>
    )
}