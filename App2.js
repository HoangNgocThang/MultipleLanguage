import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import * as RNLocalize from "react-native-localize";
import I18n from './src/services/translation';

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    // console.log(RNLocalize.getLocales());
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{I18n.t('hello')}</Text>
          <Text> Thang ! </Text>
        </View>
        <TextInput
          onChangeText={(text) => { this.setState({ text: text })}}
          style={{ width: 300, height: 100, borderWidth: 0.5 , padding:16}}
          placeholder={I18n.t('placeholderInput')}
        />
      </SafeAreaView>
    );
  }
}
