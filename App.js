

import React,{useState} from 'react';

import { Text, View, Animated, Easing,TextInput } from 'react-native';
import {
  Image,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  TouchableOpacity,
  
  Button,
} from 'react-native';

import cca from './assets/cca-main-logo.png';



import { create } from 'react-native-pixel-perfect';

 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;

const designResolution = {
  width: 360,
  height: 640,
}; //this size is the size that your design is made for (screen size)
const perfectSize = create(designResolution);



const App= () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
        <View style={styles.container}>
        <View
          style={{ flex: 1, flexDirection: 'row', backgroundColor: '#020122' }}>
           
           
          <Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
            }}
            source={require('./assets/login_rectangle.png')}
          />
         
              <Image
            style={{
              position: 'absolute',
              width: '100%',
              opacity:0.2,
              
              left: 0,
            }}
            source={require('./assets/photo_slide.png')}
          />
          


      

     
            




          <View
            style={{
              position: 'absolute',
              width: '100%',
              alignItems: 'center',
              top: perfectSize(50),
            }}>
            <Image
              source={cca}
              resizeMode="contain"
              style={{
                width: perfectSize(157),
                height: perfectSize(80),
              }}
            />

            {/* email login */}
              <View style={{
               justifyContent: 'center',
               alignItems: 'center',
               marginTop:30,
               width:'80%'
               
               
             }}>
               
               <View style={styles.inputContainer}>

      <TextInput
        value={email}
        style={styles.input}

        placeholder='Email'
        placeholderTextColor="#666"

        onChangeText={(userEmail) => setEmail(userEmail)}
      />
    </View>

    <View style={styles.inputContainer}>

     <TextInput
       value={password}
       style={styles.input}
       placeholder='Password'
       placeholderTextColor="#666"
       placeholderText="Password"

       secureTextEntry={true}

       onChangeText={(userPassword) => setPassword(userPassword)}
     />
   </View>

   <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:'#5cb85c'}]} onPress={async() => {


try{

  await auth().signInWithEmailAndPassword(email,password);

}catch(e){

  alert(e);
}
await navigation.navigate('home');

}} >
<View style={styles.btnTxtWrapper}>
<Text style={[styles.buttonText,{color:"#D8D8D8"}]}>Sign In</Text>
</View>

</TouchableOpacity>
               </View>  


               <View
              style={{
                position: 'relative',
                paddingTop: perfectSize(4),
                paddingBottom: perfectSize(2),
                flex: 1,
                width: undefined,
                height: undefined,
                textAlign: 'center',
                color: '#D8D8D8',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
            
                resizeMode="contain"
                style={{
                  fontSize: perfectSize(16),
                  fontFamily: 'avenir-heavy',
                  color: '#ffffff',
                  opacity: 0.5,
                }}>
               forgot password
                
              </Text>
            </View>




             <View style={{
               justifyContent: 'center',
               alignItems: 'center',
               marginTop:50,
               
               
             }}>
               
              <Image         
                 style={{
              position: 'absolute',
              width: '80%',
              height:50,
             
 
              
            }}
            source={require('./assets/fb_button.png')}
          />


               
               
               </View>
               

               <View style={{
               justifyContent: 'center',
               alignItems: 'center',
               marginTop:60,
               
               
             }}>
               
              <Image         
                 style={{
              position: 'absolute',
              width: '80%',
              height:50,
             
 
              
            }}
            source={require('./assets/google_button.png')}
          />


               
               
               </View>  



           
               <View
              style={{
                position: 'relative',
                paddingTop: perfectSize(24),
                paddingBottom: perfectSize(12),
                flex: 1,
                width: undefined,
                height: undefined,
                textAlign: 'center',
                color: '#D8D8D8',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                
             
                resizeMode="contain"
                style={{
                  fontSize: perfectSize(16),
                  fontFamily: 'avenir-heavy',
                  color: '#ffffff',
                  opacity: 0.5,
                }}>
                Don't have an acount? Create here
                
              </Text>
            </View>

            <View
              style={{
                position: 'relative',
                paddingTop: perfectSize(14),
                paddingBottom: perfectSize(32),
                flex: 1,
                width: undefined,
                height: undefined,
                textAlign: 'center',
                color: '#D8D8D8',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                
               
                resizeMode="contain"
                style={{
                  fontSize: perfectSize(16),
                  fontFamily: 'avenir-heavy',
                  color: '#ffffff',
                  opacity: 0.5,
                }}>
                 sign in later
                
              </Text>
            </View>



          </View>


     
      
        </View>
      </View>
    
  );
};



export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 0,
  },

  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',

  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,

    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',

  },
});
