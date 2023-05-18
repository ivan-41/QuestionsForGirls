import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';
import { listOfQuestions } from './questionlist.js';

const randQuestion = () => {
  return (listOfQuestions[Math.floor(Math.random() * listOfQuestions.length)])
};

class Question extends Component {
  constructor(props) {
    super(props)

    this.state = { q: randQuestion() };

    this.handleClick = this.handleClick.bind(this)
  };

  handleClick() {
    this.setState({ q: randQuestion() })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{this.state.q}</Text>

        <View style={styles.bottomView}>
          <Button title='Другой вопрос' onPress={this.handleClick} />
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
};

export default function App() {
  return (
    <>
      <Question />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    fontSize: 100
  },

  text: {
    fontSize: 25
  },

  bottomView: {
    position: 'absolute',
    bottom: 80
  }
});
