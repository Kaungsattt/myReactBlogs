import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home'

const Stack = createNativeStackNavigator();   
const ScreenNavigator = () => { 
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Register" component={Register}></Stack.Screen>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
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
