import DetailedTrack from "../components/DetailedTrack";

export default function singleTrackScreen({route, navigation}) {
    const track = route.params.track.item;

    return (
        <DetailedTrack track={track}></DetailedTrack>
    )
}