import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';
import FadeIn from '@expo/react-native-fade-in-image';
import layout from './layout';

export default class ListItem extends Component {
  render() {
    let {displayname, username} = this.props.item;
    return (
      <View style={styles.mainContainer}>
          <View style={styles.avatarContainer}>
              <Image
                resizeMode="cover"
                source={require('./assets/ExpoHollow.png')}
                style={styles.avatar}
              />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>
              {displayname}
            </Text>
            <Text style={styles.username}>
              {username}
            </Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: layout.window.width,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(200, 199, 204)'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 22,
  },
  username: {
    fontSize: 14,
    color: '#205070'
  },
  avatarContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderColor: 'gray',
    borderWidth: 1,
  }
})
