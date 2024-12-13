/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    totalBudget: number;
    totalExpenses: number;
}

const GeneralBalance = ({ totalBudget, totalExpenses }: IProps) => {
    const availableBudget = totalBudget - totalExpenses;
    const expensesPercentage = (totalExpenses * 100) / totalBudget;

    const availableBackground =
        expensesPercentage >= 100
            ? '#FF0000' // Red if over budget
            : expensesPercentage > 80
                ? '#FFA500' // Orange if near budget
                : '#0A6847'; // Green if under budget

    const availableTextColor =
        expensesPercentage > 80 && expensesPercentage < 100
            ? '#3C486B' // Darker color for near budget
            : '#F0F0F0'; // White if under budget

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Balance general
            </Text>
            <View style={styles.line} />

            <View style={[styles.amountsContainer, { alignItems: 'flex-end'}]}>
                <Text style={[styles.text, { textAlign: 'right' }]}>
                    Presupuesto total
                </Text>
                <Text style={[styles.amounts, { textAlign: 'right', color: '#000' }]}>
                    ${totalBudget}.00
                </Text>
            </View>

            <View style={[styles.amountsContainer, { alignItems: 'flex-start'}]}>
                <Text style={[styles.text, { textAlign: 'left' }]}>
                    Gastos totales
                </Text>
                <Text style={[styles.amounts, { textAlign: 'left', color: '#FF0000' }]}>
                    ${totalExpenses}.00
                </Text>
            </View>

            <View style={[styles.amountsContainer, { backgroundColor: availableBackground,  marginTop: 10, alignItems: 'flex-end'}]}>
                <Text style={[styles.text, { color: availableTextColor }]}>
                    Balance total
                </Text>
                <Text style={[styles.amounts, { color: availableTextColor }]}>
                    ${availableBudget}.00
                </Text>
            </View>
            <View style={styles.line} />
        </View>
    );
};

export default GeneralBalance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF', // Set default background color
        margin: 25,
    },
    title: {
        color: '#000', // Default color
        textAlign: 'left',
        fontSize: 20,
        letterSpacing: 1,
        lineHeight: 30,
    },
    text: {
        color: '#000', // Default text color
        fontSize: 15,
        letterSpacing: 1,
        lineHeight: 30,
        marginHorizontal: 10,
    },
    line: {
        borderBottomColor: '#000', // Default line color
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    amounts: {
        fontSize: 27,
        letterSpacing: 1,
        marginHorizontal: 40,
        fontWeight: 'bold',
    },
    amountsContainer: {
        display: 'flex',
        borderRadius: 8,
        padding: 5,
        justifyContent: 'center',
    },
});
