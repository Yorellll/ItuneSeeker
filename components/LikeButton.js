import {Image, TouchableOpacity} from "react-native";
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";


export default function LikeButton(props) {
    const likedTrack = props.likedTrack;
    const currentTrack = props.item;
    const clickButton = props.likeAction;

    // const isLiked = likedTrack.includes(currentTrack);
    const isLiked = likedTrack.hasOwnProperty(currentTrack.trackId);

    const changeLikeState = () => {
        clickButton(currentTrack);
    }

    return (

        <TouchableOpacity style={searchScreenStyle.likeButton} onPress={changeLikeState}>
            <Image
                source={isLiked ? require('../assets/fullHeart.png') : require('../assets/blankHeart.png')}
                style={{width: 28, height: 24}}
            />

        </TouchableOpacity>
    )
}