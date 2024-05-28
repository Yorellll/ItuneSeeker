import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import CondensedTrack from "../components/CondensedTrack";
import {useNavigation, useRoute} from "@react-navigation/native";
import LikeButton from "../components/LikeButton";
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";
import {loadFavTracks, addFav, keepFavTracks} from "../saveLikedTrack";

//Ici la vue des musiques favoris de l'utilisateur
export default function ListLikedTrack() {
    //Ici on set l'usage de route
    const route = useRoute();
    //Ici on récupère "favTrack" dans les paramètres transmis à la vue
    const {favTrack} = route.params;
    //Ici on set l'utilisation de navigation
    const navigation = useNavigation();
    //Ici on set les likedTrack avec le favTrack récupérer précédament
    const [likedTrack, setLikedTrack] = useState(favTrack);

    //Ici le usestate qui charge les musique liké
    useEffect(() => {
        const loadTracks = async () => {
            const tracks = await loadFavTracks();
            setLikedTrack(tracks);
        };
        loadTracks();
    }, []);

    //Ici la fonction qui permet d'unlike des musiques dans la vue
    const likeAction = (item) => {
        const updatedLikedTracks = addFav(likedTrack, item);
        setLikedTrack(updatedLikedTracks);
        keepFavTracks(updatedLikedTracks);
    };

    //Ici on set un favTrackArray avec les musique liké, on le transmettras en paramètre après
    const favTrackArray = Object.values(likedTrack);


    return (
        <View>
            {/*Ici la flatlist nécéssaire à l'affichage de tous les items fans favTrackArray (ce sont les musiques liké)*/}
            <FlatList
                //Ici en data on lui transmet donc favTrackArray
                data={favTrackArray}
                //Pour chaque item de favTrackArray, il affichera ce qui suit
                renderItem={({item}) =>

                    //Ici un bouton personnalisé afin mettre un( style, car on ne peut stylisé un Button
                    <TouchableOpacity style={searchScreenStyle.trackItemList} onPress={() => {
                        //Ici ce qu'on transmet à la navigation vers la vue
                        //Ici ce qu'on transmet à la navigation vers la vue "Détails", on transmet l'item courant
                        navigation.navigate('Details', {track: {item}})
                    }}>
                        {/*Ici le composant que j'ai fait, "CondensedTrack"*/}
                        <CondensedTrack track={item}/>
                        {/*Ici le composant "LikedButton" que j'ai fait, */}
                        <LikeButton item={item} likedTrack={likedTrack} likeAction={likeAction}></LikeButton>
                    </TouchableOpacity>
            }

                //Ici le texte que l'on met si la liste de musique liké est vide
                ListEmptyComponent={<Text>Vous n'avez ajouté aucune musique à vos favoris.</Text>}
                keyExtractor={item => item.trackId}
            />
        </View>
    );
}