import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export const EvaContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                {children}
            </SafeAreaView>
        </ApplicationProvider>
    );
};
