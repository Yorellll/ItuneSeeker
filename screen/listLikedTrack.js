import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import CondensedTrack from "../components/CondensedTrack";
import {useNavigation, useRoute} from "@react-navigation/native";
import LikeButton from "../components/LikeButton";
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";
import {loadFavTracks, addFav, keepFavTracks} from "../saveLikedTrack";

export default function ListLikedTrack() {
    const route = useRoute();
    const {favTrack} = route.params;
    const navigation = useNavigation();
    const [likedTrack, setLikedTrack] = useState(favTrack);

    useEffect(() => {
        const loadTracks = async () => {
            const tracks = await loadFavTracks();
            setLikedTrack(tracks);
        };
        loadTracks();
    }, []);

    const likeAction = (item) => {
        const updatedLikedTracks = addFav(likedTrack, item);
        setLikedTrack(updatedLikedTracks);
        keepFavTracks(updatedLikedTracks);
    };

    const favTrackArray = Object.values(likedTrack);


    return (
        <View>
            <FlatList
                data={favTrackArray}
                renderItem={({item}) =>

                    <TouchableOpacity style={searchScreenStyle.trackItemList} onPress={() => {
                        navigation.navigate('Details', {track: {item}})
                    }}>
                        <CondensedTrack track={item}/>
                        <LikeButton item={item} likedTrack={likedTrack} likeAction={likeAction}></LikeButton>
                    </TouchableOpacity>
            }

                ListEmptyComponent={<Text>Vous n'avez ajouté aucune musique à vos favoris.</Text>}
                keyExtractor={item => item.trackId}
            />
        </View>
    );
}