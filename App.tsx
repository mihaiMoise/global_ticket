import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Tickets from './Tickets';
import Contact from './Contact';
import TicketPurchase from './TicketPurchased';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return(
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

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


export default App;
