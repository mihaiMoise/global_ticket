import React, { useEffect, useState, useRef } from 'react';
import {WebView} from 'react-native-webview'
import { StyleSheet, View,TouchableOpacity, Text} from 'react-native';



const WebViewComponent = () => {   
    
    const webViewRef = useRef(); 

    const handleLoadEnd = () => {
       /* props.navigation.addListener('focus', () => {
          webViewRef.current.injectJavascript('console.log("Hello World")');
        });*/
      }
    
    sendMessageToSite = () => {
        webViewRef.current.postMessage("Hello from RN");
    }    
    
    return (
        <>
            <TouchableOpacity
                onPress={() => sendMessageToSite()}
                style={styles.button}
             >   
                <Text style={styles.buttontext}>News</Text>
            </TouchableOpacity>
            <WebView
                    ref={webViewRef}
                    renderToHardwareTextureAndroid={true}
                    originWhitelist={['*']}
                    source={{ uri: 'https://vps.gauss.ro/REACT_NATIVE/COMBINA/' }}
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
    }
});

export default WebViewComponent;