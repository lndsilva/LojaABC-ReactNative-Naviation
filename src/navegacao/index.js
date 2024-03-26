import React from "react";
import { SafeAreaView, Text  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";


export default props => (
    <SafeAreaView>
        <NavigationContainer>
            <Stack/>
        </NavigationContainer>
    </SafeAreaView>
)