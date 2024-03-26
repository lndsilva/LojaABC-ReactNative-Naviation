import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaA from "../views/TelaA";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator>
        <Stack.Screen name="TelaA" component={TelaA}/>
    </Stack.Navigator>
)