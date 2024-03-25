import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import styled, { keyframes } from "styled-components";
import Home from "../screens/Home";
import IMC from "../screens/IMC";
import Login from "../screens/Login";
import Lamp from "../screens/Lamp"

// const OpenContainer = styled.div`
//     width: 100vw;
//     height: 100vh;
//     background-color: '#1c1c1a';
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     div.logo-separated{
//         width: 30vw;
//     }
// `;

// const OpenFunction = () => {
//     return (
//         <OpenContainer>
//             <img src="" />
//         </OpenContainer>
//     )
// }

// const Open = OpenFunction();

const Stack = createNativeStackNavigator();

export default function StackNavigation ({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="IMC"
                component={IMC}
            />
            <Stack.Screen
                name="Lâmpada"
                component={Lamp}
            />
        </Stack.Navigator>
    )
};
