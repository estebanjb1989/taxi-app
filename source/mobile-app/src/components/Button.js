import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { colors } from '../common/theme';


export default function Button(props) {
    const { style, children, btnClick, buttonStyle } = props;
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={btnClick}
        >
            <Text style={[styles.textStyle, buttonStyle]}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.BUTTON_BACKGROUND,
        marginHorizontal: 36,
        marginTop: 12,
        padding: 24,
        borderRadius: 20,
    },
    textStyle: {
        width: "100%",
        textAlign: "center",
        fontSize: 22,
    }
});
