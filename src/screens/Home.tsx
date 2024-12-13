import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { removeTokenAndUser } from '../services/auth.services';
import GeneralBalance from '../component/Balance';


export const HomeScreen = ({navigation}: any) => {
    return (
        <View style={styles.container} >
          <Text style={styles.title}>Bienvenido</Text>
          <View style={styles.horizontalContainer}>
            <View style={styles.verticalContainer}>
                <Text>Ingresa a tu cuenta</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text >Log-in</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.verticalContainer}>
                <Text>¿No tienes cuenta? </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text >Regístrate</Text>
                </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={removeTokenAndUser}>
              <Text >Cerrar sesión</Text>
            </TouchableOpacity>
            <GeneralBalance totalBudget={350000} totalExpenses={350000} />
          <ActivityIndicator size="large" color="#00ff00" />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
      },
    subtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
      },
      horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        gap: 22,
      },
      verticalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        width: '100%',
        height: 50,
        backgroundColor: '#AAC7D8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 5,
      },
});
