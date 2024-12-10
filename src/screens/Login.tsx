import * as React from 'react';
import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export const LoginScreen = ({navigation}: any) => {


    return (
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Ingresa a tu cuenta</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => (text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={(text) => (text)}
          />

          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>¿No tienes cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerLink}>Regístrate</Text>
            </TouchableOpacity>
          </View>
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
        color: '#fff',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 16,
        color: '#777',
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
      registerContainer: {
        flexDirection: 'row',
        marginTop: 20,
      },
      registerText: {
        fontSize: 16,
        color: '#777',
      },
      registerLink: {
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: 'bold',
      },
});

