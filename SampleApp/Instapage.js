import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import InstagramLogin from 'react-native-instagram-login';
//import store from 'react-native-simple-store'
class Instapage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        igToken: '',
        igUserId: '',
        igUserName: '',
    };
  }

  setIgToken = async (data) => {
    //await store.save('igToken', data.access_token)
  //  await store.save('igUserId', data.user_id)
    console.log("tokenData",data)
    console.log("igToken",data.access_token)
    this.setState({ igToken: data.access_token, igUserId: data.user_id}, () => this.getUserProfile(data.access_token,data.user_id))

}
  getUserProfile = (token,id) => {
    // API_ROOT = "https://graph.instagram.com/${id}?fields=${'id,username'}&access_token=${token}"
    API_ROOT = "https://graph.instagram.com/{" + id + "}" + "?fields={'id,username'}" + "&access_token={" + token + "}" 
    console.log('API_ROOT',API_ROOT)
    // path = "{" + id + "}" + '&password=' + password + '&api_key=gj3ot&response_format=json&v=1.0'
    fetch(API_ROOT, {
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
       console.log('USERPROFILE RESPONSE',responseJson);
      //  this.setState({
      //     igUserName: responseJson.username
      //  })
    })
    .catch((error) => {
       console.error(error);
    });
 }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            backgroundColor: 'orange',
            height: 30, width: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => this.instagramLogin.show()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Login now</Text>
        </TouchableOpacity>
        <Text style={{ margin: 10 }}>Token: {this.state.igToken}</Text>
        {this.state.failure && <View>
          <Text style={{ margin: 10 }}>failure: {JSON.stringify(this.state.failure)}</Text>
        </View>}
        <InstagramLogin
        ref={ref => (this.instagramLogin = ref)}
        appId='1152132335126482'
        appSecret='b6612e3b85d5181794b1db27a81ef85b'
        redirectUrl='https://jdrf.org/instagram/auth'
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={ this.setIgToken }
        onLoginFailure={(data) => console.log(data)}
    />
      </View>
    );
  }
}

export default Instapage;
