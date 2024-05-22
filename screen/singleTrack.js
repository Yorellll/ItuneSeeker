import DetailedTrack from "../components/DetailedTrack";

export default function singleTrackScreen({route}) {
    const track = route.params.track.item;

    return (
        <DetailedTrack track={track}></DetailedTrack>
    )
}