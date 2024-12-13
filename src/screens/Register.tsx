import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axiosInstance from '../services/axiosInstance';

interface UserData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

export const RegisterScreen = ({ navigation }: any ) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async () => {
    if (!fullName || !email || !password || !phone ) {
      Alert.alert('porfavor completar todos los campos');
      return;
  }

  const userData: UserData = {
    fullName,
    email,
    password,
    phone,
  };

  try{
    const response = await axiosInstance.post('/auth/register', userData);
    if (response.status === 201) {
      Alert.alert('Registro exitoso');
      navigation.navigate('Login');
    }
  }catch (error) {
    Alert.alert('Problema al registrar el usuario');
    console.error(error);
  }
};

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Regístrate</Text>
          <TextInput style={styles.input} placeholder="Fullname" onChangeText={(text) => setFullName(text)} />
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={(text) => setEmail(text)} />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={(text) => setPassword(text)} />
          <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" onChangeText={(text) => setPhone(text)} secureTextEntry={true} />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>

              <Text style={styles.buttonText}>Registrar</Text>

          </TouchableOpacity>
          <Text style={styles.registerText}>Ya tienes cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Text style={styles.registerLink}>Ingresa</Text>
          </TouchableOpacity>
        </View>
      );
    };


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#091d26',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
      },
      input: {
        width: '100%',
        height: 50,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        color: 'black',
      },
      button: {
        width: '100%',
        height: 50,
        backgroundColor: '#AAC7D8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      registerLink: {
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: 'bold',
      },
      registerText: {
        fontSize: 16,
        color: '#777',
      },
    });
