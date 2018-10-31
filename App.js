/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { StyleSheet, View, Text, Image, WebView} from 'react-native';
import TestComponent from './TestComponent';
import CustomButton from './customButton';
import Main from './main';

// Data stored
const datas = [
  {id: "FOLLOW", count: 0, color: "blue"},
  {id: "LIKE", count: 0, color: "green"},
  {id: "DISLIKE", count: 0, color: "red"},
];


type Props = {};
export class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      datas,
      facebook: false,
      instagram: false,
    };
  }

  _updateCount(idx){
    const newDatas = [...this.state.datas];
    newDatas[idx].count = newDatas[idx].count + 1;

    this.setState({
      datas: newDatas
    });
  }

  render() {
    return (
      <View style={styles.container}>

      <View style={styles.title}>
        <Text style={{fontSize: 35,color: 'white'}}>Gourmet Q</Text>
        <Text style={{fontSize: 25,color: 'white'}}>The Fellowship of the Food</Text>
      </View>

      {
        this.state.facebook ?
        <WebView
          source={{uri: "https://www.facebook.com/minkyu.yang.509"}}
          style={{marginTop: 20}}
        />
        :
        <View style={styles.content}>

        <Image
            style={{height:'80%', width:'100%', resizeMode:'cover'}}
            source={require('./img/index2.jpeg')}/>

        <View style={styles.elem}>
          {
            this.state.datas.map((data, index) => {
              return(
                <TestComponent
                  key={data.id}
                  id={data.id}
                  color={data.color}
                  title={data.count.toString()}
                  updateCount={this._updateCount.bind(this, index)}/>
              )
            })
          }

        </View>
        </View>
      }

      <View style={styles.footer}>
        <CustomButton buttonColor={'#023e71'}
            title={'Facebook'}
            onPress={() => (
              this.state.facebook ?
              this.setState({
                facebook: false,
              }) :
              this.setState({
                facebook: true,
                instagram: false,
              })
            )}/>
        <CustomButton buttonColor={'grey'}
            title={'Instagram'}
            onPress={() => (
              this.state.instagram ?
              this.setState({
                instagram: false,
              }) :
              alert('Instagram: https://www.instagram.com/min_q87/'),
              this.setState({
                instagram: true,
                facebook: false,
              })
              )}/>
      </View>
      </View>
    );
  }
}

// Navigation bar configuration.
export default createMaterialTopTabNavigator({
  Home: {
    screen: App,
  },
  List: {
    screen: Main,
  },
}, {
  tabBarOptions: {
    activeTintColor: "white",
    inactiveTintColor: "grey",
    indicatorStyle: {
      backgroundColor: "black"
    },
    style: {
      backgroundColor: 'black',
    },
  }
})

// Style Sheet, CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    width:'100%',
    height:'18%',
    left: '7%',
    overflow: 'visible',
  },
  footer: {
    height:'14%',
  },
  content: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor:'#eee',
    padding: 5,
  },
});
