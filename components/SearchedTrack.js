import {useFocusEffect, useNavigation} from "@react-navigation/native";
import CondensedTrack from "./CondensedTrack";
import { FlatList, Text, TouchableOpacity, View} from "react-native";
import { useState, useCallback} from "react";
import LikeButton from "./LikeButton";
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";
import {loadFavTracks, keepFavTracks, addFav} from "../saveLikedTrack";

//Ici le composant qu'on a mis dans le searchScreen
export default function SearchedTrack(props) {
    //Ici on récupère les trcks dans les props
    const track = props.track;
    //On récupère aussi les paramètres de recherches
    const searchSetting = props.searchSetting;
    //Ici on set l'utilisation de navigation
    const navigation = useNavigation();
    //Ici on set la const pour les musiques liké
    const [likedTrack, setLikedTrack] = useState({});

    //Ici
    useFocusEffect(
        useCallback(() => {
            const loadTracks = async () => {
                const tracks = await loadFavTracks();
                setLikedTrack(tracks);
            };
            loadTracks();
        }, [])
    );

    //Ici la fonction pour liké les musiques
    const likeAction = (item) => {
        const updatedLikedTracks = addFav(likedTrack, item);
        setLikedTrack(updatedLikedTracks);
        keepFavTracks(updatedLikedTracks);
    };


    return (
        //Ici la view retourné
        <View>
            {/*Ici le bouton custom pour accéder aux favoris*/}
            <TouchableOpacity
                //On transmet à la navigation, les musiques liké
                onPress={() => navigation.navigate('Favorite', {favTrack: likedTrack})}
                style={searchScreenStyle.favButton}>
                <Text style={searchScreenStyle.buttonText}>Favoris</Text>
            </TouchableOpacity>

            {/*Ici la flatlist qui pour chaque item de l'ensemble des tracks récupérer plus haut affiche le nécéssaire*/}
            <FlatList
                data={track}
                renderItem={({item}) =>
                    //Chaque item est englobé dans un touchable opacity, afin de le rendre cliquable pour naviguer vers la vue Details
                    <TouchableOpacity style={searchScreenStyle.trackItemList} onPress={() => {
                        navigation.navigate('Details', {track: {item}})
                    }}>
                        {/*Ici le composant "CondensedTrack" fait par moi même, on lui transmet l'item courant*/}
                        <CondensedTrack track={item}/>
                        {/*Ici on test searchSetting, si il vaut "&entity=musicTrack" ou est vide alors on affiche le bouton de like.*/}
                        {/*Cela permet d'afficher le bouton de like uniquement pour les musiques*/}
                        {(searchSetting.toString() === "&entity=musicTrack" || !searchSetting) &&
                            <LikeButton item={item} likedTrack={likedTrack} likeAction={likeAction}></LikeButton>
                        }
                    </TouchableOpacity>
                }
            />
        </View>
    )
}