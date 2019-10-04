import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class component1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Greg',
            showName: true,
            message: this.props.message
        }
    }

    static defaultProps = {
        message: "Welcome to Yuli."
    };
    render() {
        let name = this.state.showName ? this.state.name : 'No name';
        return (
            <View>
                <Text>{this.state.message}</Text>
                <Text>Glad to have you back {name}.</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('component1', () => component1);