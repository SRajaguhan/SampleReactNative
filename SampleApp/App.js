/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
  Button
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

class App extends React.Component {
  constructor(props){
       super(props);
       this.state = { f1: null, f2: null, result: null, email: "" };
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
                   }}
                   title="Vaildate"
                 />
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
});

export default App;
