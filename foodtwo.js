import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button  } from 'react-native';

export default class FoodTwe extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.food}>Tonkotsu Ramen</Text>
          <Image style={{height:250, width:250, resizeMode:'cover'}}
          source={require(`./img/ramen.jpeg`)}/>
          <Text style={styles.details}>{"Ramen (/ˈrɑːmən/) (拉麺, ラーメン rāmen, IPA: [ɾaꜜːmeɴ]) is a Japanese dish. It consists of Chinese-style wheat noodles served in a meat or (occasionally) fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork (叉焼 chāshū), dried seaweed (海苔 nori), menma (麺麻), and green onions (葱 negi). Nearly every region in Japan has its own variation of ramen, from the tonkotsu (pork bone broth) ramen of Kyushu to the miso ramen of Hokkaido."}</Text>
        </View>
        <View style={styles.options}>
          <Button color="grey" title='List' onPress={()=> {this.props.navigation.navigate("Main")}}/>
          <Button color="grey" title='Pork' onPress={()=> {this.props.navigation.navigate("Pork")}}/>
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
