import {Image, Text, View} from 'react-native';
import {Rating} from "react-native-elements";
import React, {useState} from "react";
import {singleTrackScreenStyle} from "../stylesheet/singleTrackScreenStyle";

//Ici le composant DetailedTrack, celui ci affiche les détails d'une musique
export default function DetailedTrack(props) {
    //Ici on récupère la musique sur laquelle on a cliqué dans les props
    const track = props.track;
    //Ici on définit la const note pour la note, plus bas
    const [note, setNote] = useState(0);

    //Cette fonction permet de noter les musiques
    const rate = (note) => {
        setNote(note);
    }


    return (
        //Ici la vue retourné par le composant
        <View style={singleTrackScreenStyle.containerDetailedTrack}>
            {/*Ici on test s'il y a une image*/}
            {track.artworkUrl100 && <Image
                source={{uri: track.artworkUrl100}}
                style={singleTrackScreenStyle.detailedTrackImage}
            />}

            {/*Ici, chaque texte détaillant la l'item*/}
            <Text>
                Artist : {track.artistName} {'\n'}{'\n'}Track name :{track.trackName} {'\n'}{'\n'}Release
                : {track.releaseDate} {'\n'}{'\n'}{track.longDescription}
            </Text>

            {/*Ici la note que l'on peut attribuer*/}
            <Rating
                showRating
                onFinishRating={rate}
                style={{ paddingVertical: 10 }}
            />
        </View>
    )
}