import {Image, TouchableOpacity} from "react-native";
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";

//Ici le composant LikeButton, utiliser pour liker les musiques
export default function LikeButton(props) {
    //Ici on récupère tous les props

    const likedTrack = props.likedTrack;
    const currentTrack = props.item;
    const clickButton = props.likeAction;
    const isLiked = likedTrack.hasOwnProperty(currentTrack.trackId);

    //Ici on modifie l'état like / unlike de la musique
    const changeLikeState = () => {
        clickButton(currentTrack);
    }

    return (
        //Ici le touchableOpacity renvoyé, celui ci est en fait stylisé en image
        <TouchableOpacity style={searchScreenStyle.likeButton} onPress={changeLikeState}>
            <Image
                source={isLiked ? require('../assets/fullHeart.png') : require('../assets/blankHeart.png')}
                style={{width: 28, height: 24}}
            />

        </TouchableOpacity>
    )
}