import React from 'react';
// import { Icon } from 'react-native-elements'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageResizeMode,
  Text,
  Button,
} from 'react-native';

export const RightImage = props => (
    <TouchableOpacity style={styles.sortstyle} onPress={props.onPress}>
      <Image
        source={require('../SampleApp/assets/fav.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
  );
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({

  sortstyle: {
    width: 30,
    height: 30,
    marginRight: width * 0.05,
  }
});