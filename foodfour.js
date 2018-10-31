import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button  } from 'react-native';

export default class FoodOne extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.food}>Wine</Text>
          <Image style={{height:250, width:250, resizeMode:'cover'}}
          source={require(`./img/wine.jpeg`)}/>
          <Text style={styles.details}>{"Château Guiraud is a sweet white wine ranked as Premier Cru Classé (French, “First Growth”) in the original Bordeaux Wine Official Classification of 1855. Belonging to the Sauternes appellation in Gironde, in the region of Graves, the winery is located in the commune of Sauternes. The estate vine plantings consist of 65% Semillon and 35% Sauvignon Blanc. The vines are on average 35–40 years old."}</Text>
        </View>
        <View style={styles.options}>
          <Button color="grey" title='List' onPress={()=> {this.props.navigation.navigate("Main")}}/>
          <Button color="grey" title='Pork' onPress={()=> {this.props.navigation.navigate("Pork")}}/>
          <Button color="grey" title='Ramen' onPress={()=> {this.props.navigation.navigate("Ramen")}}/>
          <Button color="grey" title='Sushi' onPress={()=> {this.props.navigation.navigate("Sushi")}}/>
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
