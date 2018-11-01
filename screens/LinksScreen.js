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

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
          <Image
              source={
                __DEV__
                  ? require('../assets/info/info.png')
                  : require('../assets/info/info.png')
              }
              style={{width:'100%'}}      
            />
            
            <Image
              source={
                __DEV__
                  ? require('../assets/info/info1.png')
                  : require('../assets/info/info1.png')
              }
              style={{width:'97%', resizeMode:'stretch'}}      
            />

                <Image
              source={
                __DEV__
                  ? require('../assets/info/info2.png')
                  : require('../assets/info/info2.png')
              }
              style={{width:'100%'}}      
            />
                <Image
              source={
                __DEV__
                  ? require('../assets/info/info3.png')
                  : require('../assets/info/info3.png')
              }
              style={{width:'100%'}}      
            />
       <Image
              source={
                __DEV__
                  ? require('../assets/info/info4.png')
                  : require('../assets/info/info4.png')
              }
              style={{width:'100%'}}      
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
