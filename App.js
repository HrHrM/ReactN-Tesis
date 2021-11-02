import React                from 'react'
import Tts                  from './Components/Tts'
import * as eva             from '@eva-design/eva'
import { default as theme } from './CustomProperties/theme.json'
import { ApplicationProvider, 
         Layout, 
         Text }             from '@ui-kitten/components'

const HomeScreen = () => (
  <Layout style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
    <Text category = 'h1'> Kaede app </Text>
  </Layout>
)

export default () => (
  <ApplicationProvider {...eva} theme = {{ ...eva.dark, ...theme }} >
    <HomeScreen />
  </ApplicationProvider>
)


// export default function App () {
//   return (
//       
//   )
// }