import React,{useState} from 'react'
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


const Login = ({ navigation }) => {

  const [pin, setPin] = useState('');
  const [submitted, setSubmitted] = useState(false);
  

  const onLogin = () => {
    setSubmitted(!submitted);
  }
  
  return (
    <View style={styles.body}>
      <View style={styles.inputView}>
       <TextInput
       style={styles.textInput}
       placeholder="Enter Pin"
       placeholderTextColor="#73A9AD"
       secureTextEntry={true}
       maxLength={4}
       keyboardType="numeric"
       />
      </View>
      
      
    <Button    
      title="Register"
      onPress={() =>
        navigation.navigate('Profile')
      }
    />
      
      {/*Submit button  */}

        <Button    
      title={submitted ? 'confirmed' : 'Submit'}
      onPress={onLogin}
      disabled={submitted}
    />
  
    <View>
      { submitted ? 
        <Text>The name is {name}</Text>
        : null}
    </View>
    </View>
  )
}

export default Login;

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
