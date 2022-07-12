import React, {useEffect} from 'react'
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native'



const logoUri = `https://i.pinimg.com/736x/42/ef/c4/42efc4a15f2a9ea86cab71364e12737d--splash-screen-screen-design.jpg`;

export default function Splash ({ navigation }) {
  useEffect(() => {
     setTimeout(()=>{
       navigation.replace('Home')
     }, 2000);
  },[]);
  

return (
  <View style={styles.body}>
    <Image
          //source={{ uri: logoUri }}
          //source={require('.assets/splash.jpg')}
          source={require('../assets/splash.jpg')}
          resizeMode="contain"
        />
  </View>
)

};

const styles = StyleSheet.create({
     body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     },
})