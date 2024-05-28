import {useState, useEffect} from "react";
import SearchedTrack from "../components/SearchedTrack";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {searchScreenStyle} from "../stylesheet/searchScreenStyle";

//Ici, l'écran principale, celui de l'accueil
export default function SearchScreen(navigation) {
    //On définit les const nécéssaire à la rechercher

    //Celle ci sert a récupérer les musiques
    const [track, setTrack] = useState([])
    //Celle ci détermine ce que recherche l'utilisateur
    const [searchTerm, setSearchTerm] = useState('');
    //Celle ci détermine la recherche sur musique ou artiste
    const [searchEntity, setSearchEntity] = useState('');

    //Ici la fonction qui fait l'appel api,
    const fetchTrack = async (searchTerm) => {
        try {
            //Ici le lien avec les paramètres nécéssaire
            const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music${searchEntity}&lang=fr_fr`);
            const result = await response.json()
            setTrack(result.results)
        } catch (err) {
            console.log(err)
        }
    }

    //Ici la fonction qui permet de set la recherche sur artiste
    const searchArtistButton = () => {
        setSearchEntity("&entity=musicArtist")
    }
    //Ici la recherche qui permet de set la recherche sur musique
    const setSearchTrackButton = () => {
        setSearchEntity("&entity=musicTrack")
    }

    //Ici le use effect qui permet de mettre à jour la recherche à chaque changement de caractère dans la recherche
    useEffect(() => {
        fetchTrack(searchTerm);
    }, [searchTerm, searchEntity]);


    return (

        //Ici la vue retourné
        <View style={searchScreenStyle.mainContainer}>
            {/*Ici le container header qui sert a contenir l'input de recherche*/}
            <View style={searchScreenStyle.header}>
                <TextInput style={searchScreenStyle.searchInput}
                           placeholder={"Rechercher"}
                           value={searchTerm}
                           //A chaque changement du texte dans l'input on set la recherche à la nouvelle valeur
                           onChangeText={setSearchTerm}
                />

            </View>

            {/*Ici le container des boutons permettant de changer le recherche entre artiste et musique*/}
            <View style={searchScreenStyle.buttonContainer}>
                {/*Ici le bouton est en réalité un touchableOpacity stylisé, car on ne peut stylisé des boutons*/}
                <TouchableOpacity
                    style={searchScreenStyle.button}
                    // Ici on appelle la fonction qui set la recherche sur artiste
                    onPress={searchArtistButton}>
                    <Text style={searchScreenStyle.buttonText}>Artist</Text>
                </TouchableOpacity>

                {/*Ici le bouton est en réalité un touchableOpacity stylisé, car on ne peut stylisé des boutons*/}
                <TouchableOpacity
                    style={searchScreenStyle.button}
                    // Ici on appelle la fonction qui set la recherche sur musique
                    onPress={setSearchTrackButton}>
                    <Text style={searchScreenStyle.buttonText}>Musique</Text>
                </TouchableOpacity>
            </View>

            {/*Ici le component personalisé auquels on envoit les items récupérer suite à l'appelle API*/}
            <SearchedTrack track={track} searchSetting={searchEntity}/>
        </View>
    )
}