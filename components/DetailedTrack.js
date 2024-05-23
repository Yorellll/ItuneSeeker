import {Image, Text, View} from 'react-native';
import {Rating} from "react-native-elements";
import React, {useState} from "react";
import {singleTrackScreenStyle} from "../stylesheet/singleTrackScreenStyle";


export default function DetailedTrack(props) {
    const track = props.track;
    const [note, setNote] = useState(0);

    const rate = (note) => {
        setNote(note);
    }


    return (
        <View style={singleTrackScreenStyle.containerDetailedTrack}>
            {track.artworkUrl100 && <Image
                source={{uri: track.artworkUrl100}}
                style={singleTrackScreenStyle.detailedTrackImage}
            />}

            <Text>
                Artist : {track.artistName} {'\n'}{'\n'}Track name :{track.trackName} {'\n'}{'\n'}Release
                : {track.releaseDate} {'\n'}{'\n'}{track.longDescription}
            </Text>

            <Rating
                showRating
                onFinishRating={rate}
                style={{ paddingVertical: 10 }}
            />
        </View>
    )
}