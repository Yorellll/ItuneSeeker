import AsyncStorage from "@react-native-async-storage/async-storage";


//Ici se trouve les fonctions nécéssaire à la sauvegardes des musiques liké sur le téléphone

//Celle ci permet de charger les musiques en mémoire
export const loadFavTracks = async () => {
    try {
        const savedLikedTracks = await AsyncStorage.getItem('likedTracks');
        return savedLikedTracks ? JSON.parse(savedLikedTracks) : {};
    } catch (error) {
        console.error('Failed to load liked tracks:', error);
        return {};
    }
};

//Celle ci permet de sauvegarder les musiques liké en mémoire
export const keepFavTracks = async (likedTracks) => {
    try {
        await AsyncStorage.setItem('likedTracks', JSON.stringify(likedTracks));
    } catch (error) {
        console.log('Failed to save liked tracks:', error);
    }
};

//Celle ci permet d'ajouter une musique like en mémoire
export const addFav = (likedTrack, item) => {
    const trackId = item.trackId;
    const updatedLikedTracks = {...likedTrack};

    if (updatedLikedTracks[trackId]) {
        delete updatedLikedTracks[trackId];
    } else {
        updatedLikedTracks[trackId] = item;
    }
    return updatedLikedTracks;
};
