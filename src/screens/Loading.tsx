/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Loading = () => {
  return (
    <SafeAreaView style={{display: 'flex', justifyContent: 'center', height: '100%'}}>
        <ActivityIndicator size="large"/>
    </SafeAreaView>
  );
};

export default Loading;
