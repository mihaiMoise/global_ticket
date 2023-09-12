import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Tickets from './Tickets';
import Contact from './Contact';
import TicketPurchase from './TicketPurchased';
import News from './News';
import WebViewComponent from './WebView';
import WebView from 'react-native-webview';

const Stack = createStackNavigator();

function App(): JSX.Element {
 /* return(
    <>
      <StatusBar barStyle="dark-content" hidden/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'>
            <Stack.Screen
              name="Home"
              options={{
                headerShown:false,
              }}>
                {(props: any)=><Home{...props} username='Sports Fan'/>}
            </Stack.Screen>
            <Stack.Screen
              name='Tickets'
              component={Tickets}
              options={{
                headerTitleAlign:'center',
                headerTitleStyle:{fontFamily: 'Ubuntu-Regular'}
              }}
            />
            <Stack.Screen
              name='Contact'
              component={Contact}
              options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
                headerTitle:'Contact us'
              }}
            />
            <Stack.Screen
              name='Purchase'
              component={TicketPurchase}
              options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
                headerTitle: 'Purchase Tickets'
              }}
            />
            <Stack.Screen
              name='News'
              component={News}
              options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
                headerTitle: 'Latest News'
              }}
            />
            
            <Stack.Screen
              name='WebView'
              component={WebViewComponent}
              options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
                headerTitle: 'Web View'
              }}
            />            
            
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );*/
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" hidden />
      <WebView
        renderToHardwareTextureAndroid={true}
        originWhitelist={['*']}
        source={{ uri: 'https://vps.gauss.ro/GAUSS_CHAT/' }}
        style={{ marginTop: 0,flex:1 }} />
    </View>
  );
}


export default App;
