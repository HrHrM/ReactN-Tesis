import React                                 from 'react'
import * as eva                              from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack }                      from '@ui-kitten/eva-icons'
import { AppNavigator }                      from './Components/navigation/AppNavigator'
import { SafeAreaProvider }                  from 'react-native-safe-area-context'

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </ApplicationProvider>
  </>
);

//Home screen example

// import React from 'react';
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
// import { LoginButton } from './Components/ButtonFB';

// const HomeScreen = () => (
//   <Layout style={{ height: 400, justifyContent: 'center', alignItems: 'center'}}>
//     <Text category='h1'>Kaede</Text>
//   </Layout>
// );

// export default () => (
//   <>
//     <IconRegistry icons={EvaIconsPack} />
//     <ApplicationProvider {...eva} theme={eva.light}>
//       <HomeScreen />
//       <LoginButton />
//     </ApplicationProvider>
//   </>
// );

// App Navigator with details button example

// import React                                 from 'react';
// import * as eva                              from '@eva-design/eva';
// import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
// import { EvaIconsPack }                      from '@ui-kitten/eva-icons';
// import { AppNavigator }                      from './Components/Nagivation//navigator'

// export default () => (
//   <>
//     <IconRegistry icons={EvaIconsPack}/>
//     <ApplicationProvider {...eva} theme={eva.light}>
//       <AppNavigator/>
//     </ApplicationProvider>
//   </>
// );