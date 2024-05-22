import {useFocusEffect, useNavigation} from "@react-navigation/native";
import CondensedTrack from "./CondensedTrack";
import { FlatList, Text, TouchableOpacity, View} from "react-native";
import { useState, useCallback} from "react";
import LikeButton from "./LikeButton";
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";
import {loadFavTracks, keepFavTracks, addFav} from "../saveLikedTrack";


export default function SearchedTrack(props) {
    const track = props.track;
    const searchSetting = props.searchSetting;
    const navigation = useNavigation();
    const [likedTrack, setLikedTrack] = useState({});

    useFocusEffect(
        useCallback(() => {
            const loadTracks = async () => {
                const tracks = await loadFavTracks();
                setLikedTrack(tracks);
            };
            loadTracks();
        }, [])
    );

    const likeAction = (item) => {
        const updatedLikedTracks = addFav(likedTrack, item);
        setLikedTrack(updatedLikedTracks);
        keepFavTracks(updatedLikedTracks);
    };


    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('listLikedTrack', {favTrack: likedTrack})}
                style={searchScreenStyle.favButton}>
                <Text style={searchScreenStyle.buttonText}>Favoris</Text>
            </TouchableOpacity>

            <FlatList
                data={track}
                renderItem={({item}) =>
                    <TouchableOpacity style={searchScreenStyle.trackItemList} onPress={() => {
                        navigation.navigate('singleTrack', {track: {item}})
                    }}>
                        <CondensedTrack track={item}/>
                        {(searchSetting.toString() === "&entity=musicTrack" || !searchSetting) &&
                            <LikeButton item={item} likedTrack={likedTrack} likeAction={likeAction}></LikeButton>
                        }
                    </TouchableOpacity>
                }
            />
        </View>
    )
}