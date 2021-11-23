import React from "react";
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from "../screens/Dashboard"; 
import { Register } from "../screens/Register";
import { Posts } from "../screens/Posts";
import { View } from "../screens/View";

export function AppRoutes(){
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
                }
            }}
        >
            <Screen 
                name="Meus"
                component={Dashboard}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons 
                            name="account-circle"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen 
                name="Posts" 
                component={Posts}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons 
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen 
                name="Publicar"
                component={Register}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons 
                            name="app-registration"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen 
                name="API"
                component={Register}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons 
                            name="api"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen 
                name="View"
                component={View}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons 
                            name="api"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}