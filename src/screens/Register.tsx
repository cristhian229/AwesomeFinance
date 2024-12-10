import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export const RegisterScreen = ({ navigation }: any ) => {

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Regístrate</Text>
          <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => (text)} />
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={(text) => (text)} />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry onChangeText={(text) => (text)} />
          <TextInput style={styles.input} placeholder="Confirmar Contraseña" secureTextEntry onChangeText={(text) => (text)} />
          <TouchableOpacity style={styles.button}>

              <Text style={styles.buttonText}>Registrar</Text>

          </TouchableOpacity>
          <Text style={styles.registerText}>Ya tienes cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
