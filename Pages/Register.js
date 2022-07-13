import React,{useState, useEffect} from 'react'
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Register = ({ navigation }) => {

  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [pin, setPin] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const ClearStorage = () => AsyncStorage.clear();


  useEffect(() =>{
    getData();
  },[])


  const getData = () =>{
    try{
      AsyncStorage.getItem('data')
        .then(value =>{
          if(value!= null){
            navigation.navigate('Profile');
          }
        })
    }catch(error){
    console.log(error)
    }
  }

  const onRegister = async () => {
      if (name.length  == 0) {
        Alert.alert('Warning!', 'No name specified')
      }else if(telephone.length == 0){
        Alert.alert('Warning!', 'No telephone number specified')
      }else if(pin.length == 0){
        Alert.alert('Warning!', 'No pin specified')
      } else{
        try {
          let obj = {
            'name': name,
            'telephone': telephone,
            'pin': pin,
          }
          await AsyncStorage.setItem('data', JSON.stringify(obj));
          navigation.navigate('Profile');
        }catch (error){
          console.log(error)
        }
      }
  }
  
  return (
    <View style={styles.body}>
      <View style={styles.inputView}>
       <TextInput
       style={styles.textInput}
       placeholder="Enter Name"
       placeholderTextColor="#73A9AD"
       onChangeText={(value)=>setName(value)}
       />
      </View>
      <View style={styles.inputView}>
       <TextInput
       style={styles.textInput}
       placeholder="Enter Telephone"
       placeholderTextColor="#73A9AD"
       onChangeText={(value)=>setTelephone(value)}
       maxLength={10}
       keyboardType="numeric"
       />
      </View>
      <View style={styles.inputView}>
       <TextInput
       style={styles.textInput}
       placeholder="Enter Pin"
       placeholderTextColor="#73A9AD"
       onChangeText={(value)=>setPin(value)}
       secureTextEntry={true}
       maxLength={4}
       keyboardType="numeric"
       />
      </View>
      
      
    {/* <Button    
      title="Register"
      onPress={() =>
        navigation.navigate('Profile')
      }
    /> */}
      
      {/*Submit button  */}

        <Button    
      title={'Submit'}
      onPress={onRegister}
      
    />

<Button    
      title={'Clear '}
      onPress={ClearStorage}
      
    />
  
    {/* <View>
      { submitted ? 
        <Text>The name is {name}</Text>
        : null}
    </View> */}
    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  body: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#73A9AD',
  },
  inputView: {
    backgroundColor: "#C4DFAA",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  }
})
