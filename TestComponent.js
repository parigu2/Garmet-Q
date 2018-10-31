import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';

export default class TestComponent extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text style={
          {color: "white"}}>{this.props.id}</Text>
        <Button
          color={this.props.color}
          title={this.props.title}
          onPress={this.props.updateCount}/>
      </View>
    )
  }
}
