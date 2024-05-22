import {StyleSheet} from "react-native";

export const searchScreenStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#939393',
    },

    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    searchInput: {
        borderWidth: 2,
        borderColor: 'black',
        textAlign: 'center',
        width: '95%',
        borderRadius: 5,
        padding: 5,
        margin: 10,
        fontSize: 18,
    },

    searchButton: {
        backgroundColor: '#0054ce',
        padding: 25,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 6,
        alignItems: 'center',
        flex: 1,
    },

    searchButtonText: {
        color: '#ffffff',
        fontSize: 18,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        margin: 10,
    },

    button: {
        backgroundColor: '#0054ce',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 6,
        alignItems: 'center',
        flex: 1,
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    },

    favButton: {
        backgroundColor: '#007bff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: "center",

    },

    condensedTrackContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingVertical: 5,
    },

    imageContainer: {
        width: 100,
        height: 100,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingVertical: 5,
    },

    trackItemList: {
        flex: 1,
        flexDirection: 'row',

    },

    likeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    }

})