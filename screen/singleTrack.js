import DetailedTrack from "../components/DetailedTrack";
import {View} from "react-native";
import {singleTrackScreenStyle} from "../stylesheet/singleTrackScreenStyle";

export default function singleTrackScreen({route}) {
    const track = route.params.track.item;

    return (
        <View style={singleTrackScreenStyle.container}>
        <DetailedTrack track={track}></DetailedTrack>
        </View>
    )
}