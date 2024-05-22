import {Image, Text, View} from 'react-native';
import LikeButton from "./LikeButton";

export default function DetailedTrack(props) {
    const track = props.track;


    return (
        <View>
            {track.artworkUrl100 && <Image
                source={{uri: track.artworkUrl100}}
                style={{width: 100, height: 100}}
            />}

            <Text>
                Artist : {track.artistName} {'\n'}{'\n'}Track name :{track.trackName} {'\n'}{'\n'}Release
                : {track.releaseDate} {'\n'}{'\n'}{track.longDescription}
            </Text>

        </View>
    )
}