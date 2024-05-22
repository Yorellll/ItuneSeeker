// import React from 'react';
// import {View, FlatList, Text, Button} from 'react-native';
// import CondensedTrack from "../components/CondensedTrack";
// import {useRoute} from "@react-navigation/native";
// export default function ListLikedTrack(route, navigation) {
//    const favTracks = route.params;
//
//
//
//     // const test = () => {
//     //     console.log(route.params. + " zeub")
//     // }
//
//     return (
//         <View style={{ flex: 1 }}>
//             <FlatList
//                 data={favTracks}
//                 renderItem={({ item }) => <CondensedTrack track={item} />}
//                 keyExtractor={(item) => item.trackId.toString()}
//                 ListEmptyComponent={<Text>No liked tracks</Text>}
//             />
//             {/*<Button title={"Test"} onPress={test}></Button>*/}
//         </View>
//     );
// }

import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, Button} from 'react-native';
import CondensedTrack from "../components/CondensedTrack";
import {useNavigation, useRoute} from "@react-navigation/native";
import LikeButton from "../components/LikeButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";
import {loadLikedTracks, toggleLikeTrack, saveLikedTracks} from "../saveLikedTrack";

export default function ListLikedTrack() {
    const route = useRoute();
    const {favTrack} = route.params;
    const navigation = useNavigation();

    // setLikedTrack(favTrack);

    // useEffect(() => {
    //     console.log("Structure des données de favTrack :", favTrack);
    // }, [favTrack]);

    // useEffect(() => {
    //     const loadLikeTrack = async () => {
    //         try {
    //             const savedLikedTracks = await AsyncStorage.getItem('likedTracks')
    //             if (savedLikedTracks !== null){
    //                 setLikedTrack(JSON.parse(savedLikedTracks))
    //             }
    //         }catch (error){
    //             console.error('Failed to load liked track : ', error)
    //         }
    //     };
    //
    //     loadLikeTrack();
    // }, []);
    //
    // const savedLikedTracks = async(likedTracks) => {
    //     try {
    //         await AsyncStorage.setItem('likedTracks', JSON.stringify(likedTracks));
    //     }catch (error){
    //         console.log('Failed to save liked tracks :', error);
    //     }
    // };
    //
    // const likeAction = (item) => {
    //     const trackId = item.trackId;
    //     const updateLikedTracks = {...likedTrack};
    //
    //     if (updateLikedTracks[trackId]){
    //         delete updateLikedTracks[trackId];
    //     }else{
    //         updateLikedTracks[trackId] = item;
    //     }
    //     setLikedTrack(updateLikedTracks);
    //     savedLikedTracks(updateLikedTracks);
    // }
    const [likedTrack, setLikedTrack] = useState(favTrack);

    useEffect(() => {
        const loadTracks = async () => {
            const tracks = await loadLikedTracks();
            setLikedTrack(tracks);
        };
        loadTracks();
    }, []);

    const likeAction = (item) => {
        const updatedLikedTracks = toggleLikeTrack(likedTrack, item);
        setLikedTrack(updatedLikedTracks);
        saveLikedTracks(updatedLikedTracks);
    };

    const favTrackArray = Object.values(likedTrack);


    return (
        <View style={{flex: 1}}>
            <FlatList
                data={favTrackArray}
                renderItem={({item}) =>

                    <TouchableOpacity style={searchScreenStyle.trackItemList} onPress={() => {
                        navigation.navigate('singleTrack', {track: {item}})
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