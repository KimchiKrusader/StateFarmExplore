import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton} from 'react-360';

class Panel2 extends React.Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <View style={styles.panel}>
        <View>
          <Text style={styles.textFormatHeader}>
            Home
          </Text>
        </View>
        <View style={{padding: 15}}>
          <Text style={styles.textFormat}>
            More homeowners choose State Farm® as their home insurance company over any other insurer. Make the move to protect your home and family. Plus, save money when you have both a home and car insurance policy with State Farm®.
          </Text>
        </View>
        <VrButton
          style={styles.btn}
          onEnter={() => this.setState({hover: true})}
          onExit={() => this.setState({hover: false})}
          onClick={() => setCurrent(this.props.index)}>
          <Text style={styles.textFormatButton}>Learn More</Text>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 panel: {
   // Fill the entire surface
   width: 800, //1000
   height: 600, //600
   backgroundColor: 'rgba(0, 0, 0, 0.5)',
   justifyContent: 'center',
   alignItems: 'center',
 },
 btn: {
   backgroundColor: '#000000',
   borderColor: '#ff1111',
   borderWidth: 2,
   justifyContent: 'center',
   alignItems: 'center',
 },
 textFormatHeader: {
   color: '#FFFFFF',
   fontWeight: 'bold',
   fontSize: 100,
   paddingBottom: 50,
 },
 textFormatButton: {
   color: '#FFFFFF',
   fontWeight: 'bold',
   fontSize: 40,
   paddingTop: 10,
   paddingLeft: 10,
   paddingRight: 10,
   textAlign: 'center',
 },
 textFormat: {
   color: '#FFFFFF',
   fontWeight: 'bold',
   fontSize: 30,
   textAlign: 'center',
   padding: 10,
 }
});

export default Panel2;
