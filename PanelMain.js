import * as React from 'react';
import {asset, Image, StyleSheet, Text, View, VrButton} from 'react-360';

class PanelMain extends React.Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <View style={styles.panel}>
        <View>
          <Text style={styles.textFormatHeader}>
            Welcome!
          </Text>
        </View>
        <View style={{padding: 15}}>
        <Image style={styles.postButtonPreview} source={{uri: this.props.preview}} />
          <View style={[styles.postButtonInfo, this.state.hover ? styles.postButtonInfoHover : null]}></View>
            <View style={styles.postButtonLabel}></View>
          <Text style={styles.textFormatButton}>Learn More</Text>
          <Text style={styles.textFormat}>
            To navigate, simply click and drag with your mouse or use a VR headset!
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 150, justifyContent: 'center'}}>
          <Image style={{width: 100, height: 100}} source={asset('arrow-left.png')} />
          <Image style={{width: 100, height: 100}} source={asset('arrow-right.png')} />
        </View>
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
 },
 postButtonInfo: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  flexDirection: 'column',
},
 postButtonInfoHover: {
  backgroundColor: 'rgba(255, 225, 225, 0.6)',
},
postButtonPreview: {
  width: '100%',
  height: 900,
}
});

export default PanelMain;
