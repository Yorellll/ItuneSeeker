import {Image, Text, View} from 'react-native';
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";

export default function CondensedTrack(props) {
    const track = props.track;
    const image = track.artworkUrl100;

    return (
        <View style={searchScreenStyle.condensedTrackContainer}>
            <View style={searchScreenStyle.imageContainer}>
                {image && <Image
                    source={{uri: track.artworkUrl100}}
                    style={{width: 100, height: 100, borderRadius: 5}}
                />}
            </View>

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

            {/*<Text>*/}
            {/*    {track.artistName}*/}
            {/*</Text>*/}

            {/*<Text>*/}
            {/*    {track.trackName}*/}
            {/*</Text>*/}

            {/*<Text>*/}
            {/*    {track.shortDescription}*/}
            {/*</Text>*/}
        </View>
    )
}