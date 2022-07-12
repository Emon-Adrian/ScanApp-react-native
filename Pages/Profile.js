import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {

  const [user, setUser]  = useState('');

  useEffect(() =>{
    getData();
  },[])


  const getData = () =>{
    try{
      AsyncStorage.getItem('data')
        .then(value =>{
          if(value!= null){
            let obj = JSON.parse(value);
            setUser(obj);
          }
        })
    }catch(error){
    console.log(error)
    }
  }

  return (
    <View style={styles.body}>
        <Text style={styles.text}>Welcome!</Text>
        <Text>Name:{user.name}</Text>
        <Text>Telephone: {user.telephone}</Text>
        <Text>Pin:{user.pin}</Text>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
   body:{
    flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#73A9AD',
   },
   text:{
    textAlign: 'right',
   }
})