import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './axiosInstance';

interface User {
    id: string;
    email: string;
    fullName: string;
    phone?: string;
}
interface LoginData {
    email: string;
    password: string;
}

export const LoginService = async (loginData: LoginData) => {

    try {
        const { data } = await axiosInstance.post('/auth/login', loginData);
        console.log('data from service', data);

        if (data.statusCode === 201) {
          const token = data.data.token;
          const user = {
            id: data.data.userId,
            email: data.data.email,
            fullName: data.data.fullName || 'No name provided',
          };

          if (user && user.id && user.email) {
            await setToken(token);
            await setUser(user);
          } else {
            console.error('User data is invalid', user);
          }
        }

        return data;
      } catch (error) {
        console.error('Error during login', error);
        throw error;
    }
};

export const setToken = async (token: string) => {
        try{
            await AsyncStorage.setItem('token', token);
        }catch (error) {
            console.error(error, 'error setting token');
        }
};

export const setUser = async (user: User) => {
    try {
        const formattedUser = JSON.stringify(user);
        await AsyncStorage.setItem('user', formattedUser);
    } catch (error) {
        console.error('Error setting user', error);
    }
};

export const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user) : undefined;
};

export const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
        return false;
    }
    return true;
};

export const removeTokenAndUser = async () => {
    try {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');

        const token = await AsyncStorage.getItem('token');
        const user = await AsyncStorage.getItem('user');

        if (!token && !user) {
            console.log('Token and user removed successfully');
        } else {
            console.log('Failed to remove token and/or user');
        }
    } catch (error) {
        console.error('Error in logout', error);
    }
};



