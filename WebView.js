import React, { useEffect, useState, useRef } from 'react';
import {WebView} from 'react-native-webview'
import { StyleSheet, View,TouchableOpacity, Text} from 'react-native';
import { DeviceMotion } from 'expo-sensors';



const WebViewComponent = () => {   
    
    const webViewRef = useRef(); 

    const [{ alpha, gamma, beta }, setData] = useState({
        alpha: 0,
        gamma: 0,
        beta: 0,
      });
    const [subscription, setSubscription] = useState(null);

    const _subscribe = () => {
    setSubscription(
        DeviceMotion.addListener(gyroscopeData => {
            setData(gyroscopeData.rotation);
            if(gyroscopeData.rotation.alpha && gyroscopeData.rotation.beta && gyroscopeData.rotation.gamma){
                sendMessageToSite(JSON.stringify(gyroscopeData.rotation));
            }
        })
    );
    };

    DeviceMotion.setUpdateInterval(100);

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };
    
    sendMessageToSite = (message) => {
       webViewRef.current.postMessage(message);
    }    

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
      }, []);
    
    return (
        <>
           {/* <TouchableOpacity
                onPress={() => sendMessageToSite()}
                style={styles.button}
             >   
                <Text style={styles.buttontext}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
                <Text>{subscription ? 'On' : 'Off'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
                <Text>Slow</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_fast} style={styles.button}>
            <Text>Fast</Text>
            </TouchableOpacity>*/}
            <Text style={styles.text}>gamma: {gamma}</Text>
            <WebView
                ref={webViewRef}
                renderToHardwareTextureAndroid={true}
                originWhitelist={['*']}
                source={{ uri: 'https://vps.gauss.ro/REACT_NATIVE/COMBINA3/' }}
                style={{ marginTop: 20 }} />
        </>
      );
}



const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    storylist: {
        paddingBottom: 20
    },
    thumb: {
        height: 100,
        width: '100%'
    },
    storytext: {
        padding: 10
    },
    text: {
        textAlign: 'center',
      },
    buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
    },
    button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
    },
    middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
    },
});

export default WebViewComponent;