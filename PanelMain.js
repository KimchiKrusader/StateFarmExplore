import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton} from 'react-360';

class PanelMain extends React.Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <View style={styles.greetingBox}>
        <Text style={styles.greeting}>
          PanelMain
        </Text>
        <VrButton
          style={styles.btn}
          onEnter={() => this.setState({hover: true})}
          onExit={() => this.setState({hover: false})}
          onClick={() => setCurrent(this.props.index)}>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 panel1: {
   // Fill the entire surface
   width: 250, //1000
   height: 150, //600
   backgroundColor: 'rgba(255, 255, 255, 0.4)',
   justifyContent: 'center',
   alignItems: 'center',
 },
 btn: {
   padding: 100,
   backgroundColor: '#000000',
   borderColor: '#639dda',
   borderWidth: 2,
 },
});

export default PanelMain;
