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

import React                                 from 'react';
import * as eva                              from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack }                      from '@ui-kitten/eva-icons';
import { AppNavigator }                      from './navigator.js'

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator/>
    </ApplicationProvider>
  </>
);