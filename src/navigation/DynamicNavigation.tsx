import React, { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { LoginScreen } from '../screens/Login';
import { RegisterScreen } from '../screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { getToken, getUser } from '../services/auth.services';
import Loading from '../screens/Loading';

const Stack = createNativeStackNavigator();

const AppNavigator = () =>{
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const user = await getUser();
            const token = await getToken();
            if (user && token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);


    if (isAuthenticated === null) {
        return <Loading />;
    }

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isAuthenticated ? 'Home' : 'Login'}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;
