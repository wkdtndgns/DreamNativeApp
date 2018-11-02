import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Link,
  View,
} from 'react-native';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}

           
              <Text> </Text>
              {/* <Image
              source={
                __DEV__
                  ? require('../assets/mypage/log.png')
                  : require('../assets/mypage/log.png')
              }
              style={{width:'100%', marginTop:'3%'}}      
            /> */}
            
     <Image
              source={
                __DEV__
                  ? require('../assets/mypage/mypage.png')
                  : require('../assets/mypage/mypage.png')
              }
              style={{width:'97%', resizeMode:'stretch'}}       
            />
              <Image
              source={
                __DEV__
                  ? require('../assets/mypage/mypage1.png')
                  : require('../assets/mypage/mypage1.png')
              }
              style={{width:'97%', resizeMode:'stretch'}}       
            />

              <Image
              source={
                __DEV__
                  ? require('../assets/mypage/mypage2.png')
                  : require('../assets/mypage/mypage2.png')
              }
              style={{width:'97%', resizeMode:'stretch'}}     
            />
              <Image
              source={
                __DEV__
                  ? require('../assets/mypage/mypage3.png')
                  : require('../assets/mypage/mypage3.png')
              }
              style={{width:'97%', resizeMode:'stretch'}}       
            />
              <Image
              source={
                __DEV__
                  ? require('../assets/mypage/mypage4.png')
                  : require('../assets/mypage/mypage4.png')
              }
              style={{width:'97%', resizeMode:'stretch'}} 
     
            />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
});

