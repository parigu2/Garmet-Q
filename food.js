import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

export default class FoodOne extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.food}>Pork Belly</Text>
          <Image style={{height:250, width:250, resizeMode:'cover'}}
          source={require(`./img/pork.jpeg`)}/>
          <Text style={styles.details}>{"Pork belly is a boneless cut of fatty meat from the belly of a pig. This dish is considered a delicacy in many parts of the world, Pork belly is immensely popular in Chinese, Korean and Philippine cuisine. According to a 2006 survey by National Agricultural Cooperative Federation, 85% of South Korean adults stated that their favourite slice of pork is the pork belly. The survey also showed 70% of recipients eat the meat at least once a week. The high popularity of pork belly makes it one of the most expensive parts of pork."}</Text>
        </View>
        <View style={styles.options}>
          <Button color="grey" title='List' onPress={()=> {this.props.navigation.navigate("Main")}}/>
          <Button color="grey" title='Ramen' onPress={()=> {this.props.navigation.navigate("Ramen")}}/>
          <Button color="grey" title='Sushi' onPress={()=> {this.props.navigation.navigate("Sushi")}}/>
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
