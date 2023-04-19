import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Home =(props) =>{
    return (
        <View style={{flexDirection:'column'}}>
            <Image
                style={styles.globologo}
                source={require('./assets/images/logo_gauss.png')}
            />      
            <Text style={styles.title}>Welcome to GloboTicket!</Text>
            <Text style={styles.subtitles}>{props.username}</Text>
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
        </View>
    );
}
const introText=`Bla blaspdj asijd 
asopdiajspodij
aosidjoaisd
oaisdoais`;

const styles =StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center',
        padding:20
    },
    textcontainer:{
        textAlign:'center',
        paddingTop: 10
    },
    globologo:{
        height:100,
        width:150,
        resizeMode: 'contain'
    },
    title:{
        fontFamily:'Ubuntu-R'
    },
    subtitles:{
        paddingTop:5,
        fontFamily:'Ubuntu-R'
    },
    content:{
        fontFamily:'Ubuntu-L'
    }
});
export default Home;