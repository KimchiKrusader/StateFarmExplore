import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import {Surface} from 'react-360-web';

import PanelMain from './PanelMain';
import Panel1 from './Panel1';
import Panel2 from './Panel2';
import Panel3 from './Panel3';
import Panel4 from './Panel4';

 //export default class StateFarmExplore extends React.Component {};
  /*render() {
    return (
      //<View style={{transform: [{translate: [0, 0, 0]}]}}>
        <View style={styles.panel1}>
          <Text>
            1
          </Text>
        </View>,
        <View style={styles.panel2}>
          <Text>
            2
          </Text>
        </View>,
        <View style={styles.panel3}>
          <Text>
            3
          </Text>
        </View>,
        <View style={styles.panel4}>
          <Text>
            4
          </Text>
        </View>
      //</View>
    );
  }
};

 const styles = StyleSheet.create({
  panel1: {
    // Fill the entire surface
    width: 250, //1000
    height: 150, //600
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translate: [0, 0, -2]}],
  },
  panel2: {
    // Fill the entire surface
    width: 250, //1000
    height: 150, //600
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translate: [2, 0, 0]}],
  },
  panel3: {
    // Fill the entire surface
    width: 250, //1000
    height: 150, //600
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translate: [0, 0, 2]}],
  },
  panel4: {
    // Fill the entire surface
    width: 250, //1000
    height: 150, //600
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translate: [-2, 0, 0]}],
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 100,
  },
  btn: {
    padding: 100,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  pad: {
    flex: 1,
    flexDirection: 'row',
    padding: 90,
  },
  rows: {
    transform: [{translate: [0, 0, -2]}],
    flex: 1,
    flexDirection: 'row',
  }
});*/

//AppRegistry.registerComponent('StateFarmExplore', () => StateFarmExplore);
AppRegistry.registerComponent('PanelMain', () => PanelMain);
AppRegistry.registerComponent('Panel1', () => Panel1);
AppRegistry.registerComponent('Panel2', () => Panel2);
AppRegistry.registerComponent('Panel3', () => Panel3);
AppRegistry.registerComponent('Panel4', () => Panel4);
