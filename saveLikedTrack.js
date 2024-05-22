import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadFavTracks = async () => {
    try {
        const savedLikedTracks = await AsyncStorage.getItem('likedTracks');
        return savedLikedTracks ? JSON.parse(savedLikedTracks) : {};
    } catch (error) {
        console.error('Failed to load liked tracks:', error);
        return {};
    }
};

export const keepFavTracks = async (likedTracks) => {
    try {
        await AsyncStorage.setItem('likedTracks', JSON.stringify(likedTracks));
    } catch (error) {
        console.log('Failed to save liked tracks:', error);
    }
};

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
