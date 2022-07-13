import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import tw from 'twrnc';

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
        <Text style={tw`bg-white p-2 text-black rounded-full mb-5 text-xl text-center italic`}>Welcome!</Text>
       <View style={tw`text-right`}>
         <Text style={tw`border-b-2 border-slate-50 text-lg`}>Name:  {user.name}</Text>
         <Text style={tw`border-b-2 border-slate-50 text-lg`} >Telephone: {user.telephone}</Text>
         <Text style={tw`border-b-2 border-slate-50 text-lg`} >Pin:  {user.pin}</Text>
        </View> 
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
   }
})