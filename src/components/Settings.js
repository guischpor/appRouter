import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import {
  Router,
  Scene,
  Actions,
} from 'react-native-router-flux';

//import NavigationBar from '../elements/NavigationBar';

const btnBack = require('../elements/imgs/arrow_left_white.png');

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.containerView}>
        {/* <NavigationBar/> */}
        <View style={styles.navBarStyle}>
                <TouchableHighlight
                    underlayColor={'#00B0FF'}
                    activeOpacity={0.3}
                    onPress= {() => {
                        Actions.pop()
                    }}
                >
                    <Image
                        source={btnBack}
                        style={styles.btnBackStyle}
                    />
                </TouchableHighlight>
                <Text style={styles.titleStyle}>Settings</Text>
            </View>
        <View style={styles.container}>
          <Text style={styles.txtDetalhes}> Screen Settings </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  containerView: {
    flex: 1,
    backgroundColor: '#fff'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtDetalhes: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  navBarStyle: {
    backgroundColor: '#00B0FF',
    padding: 10,
    height: 50,
    flexDirection: 'row',
},

titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex: 1,
    marginTop: 2,
    marginRight: 40,
},

btnBackStyle: {
    flex: 1,
    height: 35,
    width: 35,
}
});
