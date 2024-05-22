import {useFocusEffect, useNavigation} from "@react-navigation/native";
import CondensedTrack from "./CondensedTrack";
import {Button, FlatList, Image, Text, Touchable, TouchableOpacity, View} from "react-native";
import {useEffect, useState, useCallback} from "react";
import LikeButton from "./LikeButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";
import {loadLikedTracks, saveLikedTracks, toggleLikeTrack} from "../saveLikedTrack";


export default function SearchedTrack(props) {
    const track = props.track;
    const searchSetting = props.searchSetting;
    const navigation = useNavigation();
    // const [likedTrack, setLikedTrack] = useState([]);
    const [likedTrack, setLikedTrack] = useState({});


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

    // useEffect(() => {
    //     const loadTracks = async () => {
    //         const tracks = await loadLikedTracks();
    //         setLikedTrack(tracks);
    //     };
    //     loadTracks();
    // }, []);

    useFocusEffect(
        useCallback(() => {
            const loadTracks = async () => {
                const tracks = await loadLikedTracks();
                setLikedTrack(tracks);
            };
            loadTracks();
        }, [])
    );

    const likeAction = (item) => {
        const updatedLikedTracks = toggleLikeTrack(likedTrack, item);
        setLikedTrack(updatedLikedTracks);
        saveLikedTracks(updatedLikedTracks);
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