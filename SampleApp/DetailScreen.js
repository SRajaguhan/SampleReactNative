/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

 import RightImage from '../SampleApp/Hoc'
import LinkedInModal from 'react-native-linkedin'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Dimensions,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
  // return (
  //   <>
  //     <StatusBar barStyle="dark-content" />
  //     <SafeAreaView>
  //       <ScrollView
  //         contentInsetAdjustmentBehavior="automatic"
  //         style={styles.scrollView}>
  //         <Header />
  //         {global.HermesInternal == null ? null : (
  //           <View style={styles.engine}>
  //             <Text style={styles.footer}>Engine: Hermes</Text>
  //           </View>
  //         )}
         
  //       </ScrollView>
  //     </SafeAreaView>
  //   </>
  // );
// };

class DetailScreen extends React.Component {
  
  constructor(props){
       super(props);
       this.state = { f1: null, f2: null, result: null, email: "",  authentication_code: "",
       access_token: "",
       expires_in: "", isVisible: false, isLogin: false, logout : false };
      
   }


   validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      this.setState({ email: text })
      alert("Email is in-Correct")
      return false;
    }
    else {
      this.setState({ email: text })
      alert("Email is Correct");
    }
  }



   getUser = async(token) =>{

    const response = await fetch('https://api.linkedin.com/v2/me', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      const payload = await response.json()
      console.log("Payload",payload)
  }

  linkedInPressed = () => {
    this.setState({logout:true});
 }
 

  // linkedInPressed(){

  //   return( <View style={styles.container}>
  //     <LinkedInModal
  //       ref={this.linkedRef}
  //       clientID="81jpsbe0fcgj6w"
  //       clientSecret="nqd91TXj1t1QzjOZ"
  //       redirectUri="https://www.linkedin.com/oauth2/accessToken"
  //       onError ={error => {console.log("error",error)}} 
  //       onSuccess={token => {console.log("data",token.access_token)
        
  //       this.getUser(token.access_token)
  //       } }
  //     />
  //     {/* <Button title="Log Out" onPress={this.linkedRef.current.logoutAsync()} /> */}
  //   </View>)
  // }

  logOutPressed = () => {

  }


   render() {
    const { width, height } = Dimensions.get('window')
    const inputStyle = { width: '80%', marginVertical: 5 / width * width, marginTop: 12 }
    const titleStyle = { fontSize: 16 / width * width, fontWeight: 'bold', textAlign: 'left', marginTop: Platform.select({ ios: 10 / height * height, android: 0 }), marginBottom: Platform.select({ ios: 5 / height * height, android: 0 }) }
    const iconStyle = { marginLeft: '4%', width: '6%', height: '30%', alignSelf: 'center' }
    const textInputStyle = { width: '90%', height: 50 / height * height, paddingLeft: 10, color: 'black', backgroundColor: 'red', fontSize: 14 / width * width, marginTop: 4 }
     
    var result = this.state.f1 && this.state.f2 ? this.state.f1 + this.state.f2 : null;
       return (
         <>
           <StatusBar barStyle="dark-content" />
           <SafeAreaView>
             <ScrollView
               contentInsetAdjustmentBehavior="automatic"
               style={styles.scrollView}>
               <Header />

               {global.HermesInternal == null ? null : (
                 <View style={styles.engine}>
                   <Text style={styles.footer}>Engine: Hermes</Text>
                 </View>
               )}

               <View>
               <Text style={{color: 'blue'}}>Enter Email-ID to Continue</Text>
                 <TextInput
                   style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                   keyboardType="numeric"
                   onChangeText={(text) => this.setState({email: text})}
                 />
                 {/* <TextInput
                   style={{height: 40, borderColor: 'red', borderWidth: 1}}
                   keyboardType="numeric"
                   onChangeText={(text) => this.setState({f2: parseInt(text)})}
                 />

                 <Text style={{color: 'blue'}}>{this.state.result}</Text> */}

                 <Button
                   style={{height: 40, borderColor: 'red', borderWidth: 1}}
                   onPress={() => {
                     this.validate(this.state.email)
                     navigation.goBack()
                   }}
                   title="Vaildate"
                 />
                  <Button
                   style={{height: 40, borderColor: 'red', borderWidth: 1}}
                   onPress={()=> this.linkedInPressed()}
                   title="Logout"
                 />
                 {this.state.logout && (
          <View style={{ width: 1, height: 1 }}>
            {/* <WebView
              source={{ uri: LOGOUT_URL }}
              javaScriptEnabled
              domStorageEnabled
              sharedCookiesEnabled
              onLoadEnd={() => this.setState({ logout: false }
              )} */}
            />
          </View>
        )}

               </View>
             </ScrollView>
           </SafeAreaView>
         </>
       );
   }
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    backgroundColor: 'red',
    paddingRight: 12,
    textAlign: 'right',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    backgroundColor:'red',
    padding: 5,
    width: 50,
    height : 50,
  }
});

const renderLinkedInButton = () => {
  return (
    <Button
         onPress={() => this.linkedRe}
         title="Learn More"
         color="#841584"
         accessibilityLabel="Learn more about this purple button"
     />
  );
};

export default DetailScreen;
