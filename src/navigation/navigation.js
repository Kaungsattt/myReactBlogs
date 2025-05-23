import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartingPage from '../screens/StartingPage';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home'
import EditProfile from '../screens/EditProfile';
import ShowNews from '../screens/ShowNews';
import DetailsPage from '../screens/DetailsPage';
import commonInfoPage from '../screens/commonInfoPage';

const Stack = createNativeStackNavigator();   
const ScreenNavigator = () => { 
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="StartingPage" component={StartingPage}></Stack.Screen>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Register" component={Register}></Stack.Screen>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
                <Stack.Screen name="ShowNews" component={ShowNews}></Stack.Screen>
                <Stack.Screen name="DetailsPage" component={DetailsPage}></Stack.Screen>
                <Stack.Screen name="commonInfoPage" component={commonInfoPage}></Stack.Screen>
           
            </Stack.Navigator>
        )
}
export default function AppNavigator() {
    return (
        <>
            <NavigationContainer>
                <ScreenNavigator />
            </NavigationContainer>
        </>
    )
}
