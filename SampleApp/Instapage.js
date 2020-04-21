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
        igUserId: ''
    };
  }

  setIgToken = async (data) => {
    //await store.save('igToken', data.access_token)
  //  await store.save('igUserId', data.user_id)
    console.log("tokenData",data)
    console.log("igToken",data.access_token)
    this.setState({ igToken: data.access_token, igUserId: data.user_id})
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
        <Text style={{ margin: 10 }}>Token: {this.state.token}</Text>
        {this.state.failure && <View>
          <Text style={{ margin: 10 }}>failure: {JSON.stringify(this.state.failure)}</Text>
        </View>}
        <InstagramLogin
        ref={ref => (this.instagramLogin = ref)}
        appId='224235891978499'
        appSecret='be17f67188142ccb97974c44896ce0c4'
        redirectUrl=''
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={ this.setIgToken }
        onLoginFailure={(data) => console.log(data)}
    />
      </View>
    );
  }
}

export default Instapage;
