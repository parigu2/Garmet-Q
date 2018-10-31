import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import FoodOne from './food';
import FoodTwo from './foodtwo';
import FoodThree from './foodthree';
import FoodFour from './foodfour';

class Main extends Component{

  render(){

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.food}>Pork Belly</Text>
          <Image style={styles.img}
          source={require('./img/pork.jpeg')}/>
          <Button color="grey" title='details' onPress={()=> {this.props.navigation.navigate("Pork")}}/>
        </View>
        <View style={styles.box}>
          <Text style={styles.food}>Tonkotsu Ramen</Text>
          <Image style={styles.img}
          source={require('./img/ramen.jpeg')}/>
          <Button color="grey" title='details' onPress={()=> {this.props.navigation.navigate("Ramen")}}/>
        </View>
        <View style={styles.box}>
          <Text style={styles.food}>Sushi</Text>
          <Image style={styles.img}
          source={require('./img/sushi.jpeg')}/>
          <Button color="grey" title='details' onPress={()=> {this.props.navigation.navigate("Sushi")}}/>
        </View>
        <View style={styles.box}>
          <Text style={styles.food}>Wine</Text>
          <Image style={styles.img}
          source={require('./img/wine.jpeg')}/>
          <Button color="grey" title='details' onPress={()=> {this.props.navigation.navigate("Wine")}}/>
        </View>
      </View>
    )
  }
}

export default createBottomTabNavigator({
  Main: {
    screen: Main,
  },
  Pork: {
    screen: FoodOne,
  },
  Ramen: {
    screen: FoodTwo,
  },
  Sushi: {
    screen: FoodThree,
  },
  Wine: {
    screen: FoodFour,
  },
}, {
  tabBarOptions: {
    activeTintColor: "white",
    inactiveTintColor: "grey",
    showLabel: false,
    indicatorStyle: {
      backgroundColor: "black"
    },
    style: {
      backgroundColor: 'black',
    },
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: 'black',
  },
  food: {
    fontSize: 25,
    color: 'white',
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  box: {
    alignItems: "center",
    justifyContent: "space-around",
    width: 180,
    height: 270,
    marginTop: 40,
    paddingBottom: 40,
  }
});
