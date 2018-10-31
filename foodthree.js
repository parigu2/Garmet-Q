import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button  } from 'react-native';

export default class FoodOne extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.food}>Sushi</Text>
          <Image style={{height:250, width:250, resizeMode:'cover'}}
          source={require(`./img/sushi.jpeg`)}/>
          <Text style={styles.details}>{"Sushi (すし, 寿司, 鮨, pronounced [sɯꜜɕi] or [sɯɕiꜜ]) is a Japanese dish of specially prepared vinegared rice (鮨飯 sushi-meshi), usually with some sugar and salt, combined with a variety of ingredients (ネタ neta), such as seafood, vegetables, and occasionally tropical fruits. Styles of sushi and its presentation vary widely, but the key ingredient is sushi rice, also referred to as shari (しゃり), or sumeshi (酢飯). The term sushi is no longer used in its original context and literally means sour-tasting."}</Text>
        </View>
        <View style={styles.options}>
          <Button color="grey" title='List' onPress={()=> {this.props.navigation.navigate("Main")}}/>
          <Button color="grey" title='Pork' onPress={()=> {this.props.navigation.navigate("Pork")}}/>
          <Button color="grey" title='Ramen' onPress={()=> {this.props.navigation.navigate("Ramen")}}/>
          <Button color="grey" title='Wine' onPress={()=> {this.props.navigation.navigate("Wine")}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  food: {
    fontSize: 45,
    color: 'white',
  },
  details: {
    color: "white",
  },
  options: {
    flexDirection: 'row',
  }
});
