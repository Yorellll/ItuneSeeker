import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import searchScreen from './screen/searchScreen';
import singleTrack from './screen/singleTrack'
import ListLikedTrack from './screen/listLikedTrack';


export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>

                <Stack.Screen name={'Home'} component={searchScreen}>
                </Stack.Screen>
                <Stack.Screen name={'Details'} component={singleTrack}
                ></Stack.Screen>
                <Stack.Screen name={'Favorite'} component={ListLikedTrack}
                ></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )

}