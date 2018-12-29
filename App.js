import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {
  Router,
  Scene,
  Actions,
} from 'react-native-router-flux';

import Home from './src/components/Home';
import Settings from './src/components/Settings';
import Empresa from './src/components/Empresa';

const scenes = Actions.create(
  <Scene
    key='root'
  >
    <Scene
      key='home'
      component={Home}
      hideNavBar={true}
      title='Home'
      initial
    />
    <Scene
      key='settings'
      component={Settings}
      hideNavBar={true}
      title='Settings'
    />

    <Scene
      key='empresa'
      component={Empresa}
      hideNavBar={true}
      title='Empresa'
    />
  </Scene>
);

export default class App extends React.Component {
  render() {
    return (
      <Router
        scenes={scenes}
        
      />
    );
  }
}

