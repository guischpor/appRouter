import React from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import {
    Actions,
} from 'react-native-router-flux';

const btnBack = require('../elements/imgs/arrow_left_white.png');

export default class NavigationBar extends React.Component {
    render() {
        return (
            <View style={styles.navBarStyle}>
                <TouchableHighlight
                    underlayColor={'#00B0FF'}
                    activeOpacity={0.3}
                    onPress= {() => {
                        Actions.pop()
                    }}
                >
                    <Image
                        source={btnBack}
                        style={styles.btnBackStyle}
                    />
                </TouchableHighlight>
                <Text style={styles.titleStyle}>Text navBar</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navBarStyle: {
        backgroundColor: '#00B0FF',
        padding: 10,
        height: 50,
        flexDirection: 'row',
    },

    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        flex: 1,
        marginTop: 2,
        marginRight: 40,
    },

    btnBackStyle: {
        flex: 1,
        height: 35,
        width: 35,
    }
});
