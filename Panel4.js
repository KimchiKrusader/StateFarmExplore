import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton} from 'react-360';

class Panel4 extends React.Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <View style={styles.panel}>
        <View>
          <Text style={styles.textFormatHeader}>
            Life
          </Text>
        </View>
        <View style={{padding: 15}}>
          <Text style={styles.textFormat}>
            State Farm® Life Insurance Company (Not licensed in MA, NY or WI) or State Farm Life and Accident Assurance Company (Licensed in NY and WI) can help you find coverage that's right for you and your loved ones. Our life planning videos and calculator can help you understand your options, and figure out how much and what kind is right for you, before getting your life insurance quote.
          </Text>
        </View>
        <VrButton
          style={styles.btn}
          onEnter={() => this.setState({hover: true})}
          onExit={() => this.setState({hover: false})}
          onClick={() => setCurrent(this.props.index)}>
          <Image style={styles.postButtonPreview} source={{uri: this.props.preview}} />
          <View style={[styles.postButtonInfo, this.state.hover ? styles.postButtonInfoHover : null]}></View>
            <View style={styles.postButtonLabel}></View>
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

export default Panel4;
