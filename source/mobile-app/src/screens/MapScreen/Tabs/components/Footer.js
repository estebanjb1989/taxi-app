import React from 'react'
import { View, StyleSheet, Platform, Dimensions } from 'react-native'
import { Button } from 'react-native-elements';
import { colors } from '../../../../common/theme'
import i18n from 'i18n-js';

var { height, width } = Dimensions.get('window');

const hasNotch = Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && ((height === 780 || width === 780) || (height === 812 || width === 812) || (height === 844 || width === 844) || (height === 896 || width === 896) || (height === 926 || width === 926))

const Footer = ({
    bookLaterLoading,
    bookLoading,
    onPressBookLater,
    onPressBook,
}) => {
    const { t } = i18n;
    return (
        <View style={styles.buttonBar}>
            <Button
                title={t('book_later_button')}
                loading={bookLaterLoading}
                loadingProps={{ size: "large", color: colors.BUTTON }}
                titleStyle={styles.buttonTitleStyle}
                onPress={onPressBookLater}
                buttonStyle={[styles.buttonStyle, { backgroundColor: colors.BUTTON_BACKGROUND }]}
                containerStyle={styles.bookLaterContainer}
            />
            <Button
                title={t('book_now_button')}
                loading={bookLoading}
                loadingProps={{ size: "large", color: colors.WHITE }}
                titleStyle={styles.buttonTitleStyle}
                onPress={onPressBook}
                buttonStyle={[styles.buttonStyle, { backgroundColor: colors.BUTTON_ORANGE }]}
                containerStyle={styles.bookNowContainer}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    menuIcon: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: colors.WHITE,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: hasNotch ? 40 : 20
    },
    menuIconButton: {
        flex: 1,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topTitle: {
        height: 50,
        width: 180,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: hasNotch ? 40 : 20
    },
    topTitle1: {
        height: 50,
        width: 180,
        backgroundColor: colors.WHITE,
        shadowColor: colors.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: hasNotch ? 40 : 20
    },
    mapcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapViewStyle: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
    mapFloatingPinView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    mapFloatingPin: {
        height: 40
    },
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: colors.BACKGROUND,
        paddingBottom: 12,
    },
    bookLaterContainer: {
        height: 60,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderRadius: 0,
    },
    bookNowContainer: {
        height: 60,
        borderRadius: 0,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    buttonStyle: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        width: 180,
    },
    buttonTitleStyle: {
        color: colors.WHITE,
        fontFamily: 'Roboto-Bold',
        fontSize: 18
    },
    locationButtonView: {
        position: 'absolute',
        height: Platform.OS == 'ios' ? 55 : 42,
        width: Platform.OS == 'ios' ? 55 : 42,
        bottom: 180,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: Platform.OS == 'ios' ? 30 : 3,
        elevation: 2,
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    locateButtonStyle: {
        height: Platform.OS == 'ios' ? 55 : 42,
        width: Platform.OS == 'ios' ? 55 : 42,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addressBar: {
        position: 'absolute',
        marginHorizontal: 20,
        top: hasNotch ? 100 : 80,
        height: 100,
        width: width - 40,
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        paddingLeft: 10,
        paddingRight: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderRadius: 8,
        elevation: 3
    },
    ballandsquare: {
        width: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    hbox1: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: colors.GREEN_DOT
    },
    hbox2: {
        height: 36,
        width: 1,
        backgroundColor: colors.MAP_TEXT
    },
    hbox3: {
        height: 12,
        width: 12,
        backgroundColor: colors.DULL_RED
    },
    contentStyle: {
        justifyContent: 'center',
        width: width - 74,
        height: 100
    },
    addressStyle1: {
        borderBottomColor: colors.BLACK,
        borderBottomWidth: 1,
        height: 48,
        width: width - 84,
        justifyContent: 'center',
        paddingTop: 2
    },
    addressStyle2: {
        height: 48,
        width: width - 84,
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: '#000'
    },
    fullCarView: {
        position: 'absolute',
        bottom: 60,
        width: width - 10,
        height: 170,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
    },
    fullCarScroller: {
        width: width - 10,
        height: 160,
        flexDirection: 'row'
    },
    cabDivStyle: {
        backgroundColor: colors.WHITE,
        width: '100%',
        height: 50,
        alignItems: 'center',
        marginHorizontal: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        borderRadius: 8,
        elevation: 3,
    },
    imageStyle: {
        height: 50,
        width: '100%',
        marginVertical: 20,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5
    },
    imageStyle1: {
        height: 40,
        width: 50 * 1.8
    },
    textViewStyle: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text1: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        fontWeight: '900',
        color: colors.BLACK
    },
    text2: {
        fontFamily: 'Roboto-Regular',
        fontSize: 11,
        fontWeight: '900',
        color: colors.BORDER_TEXT
    },
    carShow: {
        width: '100%',
        height: 28,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.BACKGROUND,
        position: 'absolute',
        bottom: 72,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    bar: {
        width: 100,
        height: 6,
        marginTop: 10,
        backgroundColor: colors.BUTTON_ORANGE
    },

    carContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width - 30,
        height: 70,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: colors.WHITE,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.BORDER_BACKGROUND,
        elevation: 3,
    },
    bodyContent: {
        flex: 1
    },
    titleStyles: {
        fontSize: 14,
        color: colors.HEADER,
        paddingBottom: 2,
        fontWeight: 'bold'
    },
    subtitleStyle: {
        fontSize: 12,
        color: colors.BALANCE_ADD,
        lineHeight: 16,
        paddingBottom: 2
    },
    priceStyle: {
        color: colors.BALANCE_ADD,
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
    },
    cardItemImagePlace: {
        width: 60,
        height: 50,
        margin: 10,
        borderRadius: 5
    }
});


export default Footer