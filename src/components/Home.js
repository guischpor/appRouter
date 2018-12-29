import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtDetalhes}>Screen Home</Text>
                <TouchableHighlight
                    underlayColor={'#fff'}
                    activeOpacity={0.3}
                    onPress={() => {Actions.empresa()}}
                >
                    <Text>Screen Empresa</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor={'#fff'}
                    activeOpacity={0.3}
                    onPress={() => {Actions.settings()}}
                >
                    <Text>Screen Settings</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtDetalhes: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
});