import 'react-native-gesture-handler';
import React from 'react';
import { Platform, StatusBar, View, Text, Button, PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Tickets from './Tickets';
import Contact from './Contact';
import TicketPurchase from './TicketPurchased';
import News from './News';
import WebViewComponent from './WebView';
import WebView from 'react-native-webview';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as permissions from 'react-native-permissions';


const Stack = createStackNavigator();


function App(): JSX.Element {  
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" hidden />
          <WebView
            renderToHardwareTextureAndroid={true}
            originWhitelist={['*']}
            source={{ uri: 'https://vps.gauss.ro/GAUSS_CHAT/' }}
            style={{ marginTop: 0,flex:1 }} />
        </View>
      </SafeAreaProvider>
    );
 /*   else {
      // Vi har ikke kameratillatelse ennå, kan legge til en forespørsel om tillatelse her
      return (
        <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" hidden />
          <Text>Appen trenger tilgang til kamera for å fungere riktig.</Text>
          <Button
            title="Be om kameratillatelse"
            onPress={async () => {
              const result =
                Platform.OS === 'ios'
                  ? await request(PERMISSIONS.IOS.CAMERA)
                  : await PermissionsAndroid.request(
                      PermissionsAndroid.PERMISSIONS.CAMERA
                    );

              if (result === RESULTS.GRANTED) {
                // Tillatelse ble gitt, last inn WebView eller annen funksjonalitet
              } else {
                // Tillatelse ble ikke gitt, gi beskjed til brukeren
              }
            }}
          />
        </View>
      </SafeAreaProvider>
    );
  }*/
}


export default App;



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
