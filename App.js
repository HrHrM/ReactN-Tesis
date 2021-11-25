import React from 'react';
import * as eva             from '@eva-design/eva';
import { 
  ApplicationProvider, 
  IconRegistry }            from '@ui-kitten/components';
import { AppNavigator }     from './navigation/AppNavigator';
import { EvaIconsPack }     from '@ui-kitten/eva-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default () => (
  <>
    <IconRegistry icons = {EvaIconsPack}/>
    <ApplicationProvider {...eva} theme = {eva.light}>
        <SafeAreaProvider>
            <AppNavigator />
        </SafeAreaProvider>
    </ApplicationProvider>
  </>
);

// Querido colega programador:
//
// Cuando escribí este código, solo Dios y yo 
// sabíamos como funcionaba.
// Ahora, ¡Solo Dios lo sabe!
//
// Así que si esta tratando de "Optimizarlo"
// y fracasa (seguramente), por favor,
// incremente el contador a continuación
// como una advertencia para su siguiente colega:
//
// total_horas_perdidas_aquí: 0
// 50,68,6f,73,70,68,6f,70,68,79,6c,6c,69,74,65
// ;)
