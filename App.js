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

                <Stack.Screen name={'Home'} component={searchScreen} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name={'singleTrack'} component={singleTrack}
                              options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name={'listLikedTrack'} component={ListLikedTrack}
                              options={{headerShown: false}}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )

}