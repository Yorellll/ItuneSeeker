import {Image, Text, View} from 'react-native';
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";

//Ici le composant CondensedTrack qui permet d'afficher une musique condensé dans la flatlist de l'accueil
export default function CondensedTrack(props) {
    //Ici on récupère le props de la track
    const track = props.track;
    //Ici celui de l'image
    const image = track.artworkUrl100;

    return (
        //Ici la view retourné par le composant
        <View style={searchScreenStyle.condensedTrackContainer}>
            {/*Ici la vue container de l'image*/}
            <View style={searchScreenStyle.imageContainer}>
                {/*Ici, on affiche l'image que s'il y en a une*/}
                {image && <Image
                    source={{uri: track.artworkUrl100}}
                    style={{width: 100, height: 100, borderRadius: 5}}
                />}
            </View>

            {/*Ici le container du texte*/}
            <View style={searchScreenStyle.textContainer}>
                <Text>
                    {track.artistName}
                </Text>

                <Text>
                    {track.trackName}
                </Text>

                <Text>
                    {track.shortDescription}
                </Text>
            </View>
        </View>
    )
}