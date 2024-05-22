import {useState, useEffect} from "react";
import SearchedTrack from "../components/SearchedTrack";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";


export default function SearchScreen(navigation) {
    const [track, setTrack] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchEntity, setSearchEntity] = useState('');

    const fetchTrack = async (searchTerm) => {
        try {
            const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}${searchEntity}&lang=fr_fr`);
            const result = await response.json()
            setTrack(result.results)
        } catch (err) {
            console.log(err)
        }
    }

    const searchArtistButton = () => {
        setSearchEntity("&entity=musicArtist")
    }
    const setSearchTrackButton = () => {
        setSearchEntity("&entity=musicTrack")
    }

    useEffect(() => {
        fetchTrack(searchTerm);
    }, [searchTerm, searchEntity]);


    return (

        <View style={searchScreenStyle.mainContainer}>
            <View style={searchScreenStyle.header}>
                <TextInput style={searchScreenStyle.searchInput}
                           placeholder={"Rechercher"}
                           value={searchTerm}
                           onChangeText={setSearchTerm}
                />

            </View>

            <View style={searchScreenStyle.buttonContainer}>
                <TouchableOpacity
                    style={searchScreenStyle.button}
                    onPress={searchArtistButton}>
                    <Text style={searchScreenStyle.buttonText}>Artist</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={searchScreenStyle.button}
                    onPress={setSearchTrackButton}>
                    <Text style={searchScreenStyle.buttonText}>Musique</Text>
                </TouchableOpacity>
            </View>

            <SearchedTrack track={track} searchSetting={searchEntity}/>
        </View>
    )
}