import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Component2 from "./components/Component2/Component2";

export default class myapp extends Component {
    render() {
        return (
            <View style={{marginTop: 100}}>
                <Component2/>
            </View>
        )
    }
}

AppRegistry.registerComponent('myapp', () => myapp);