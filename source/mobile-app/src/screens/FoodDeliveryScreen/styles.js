import { fromGeoJSON } from "@mapbox/polyline";
import { StyleSheet } from 'react-native'
import { colors } from '../../common/theme'

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
    },

    text: {
        fontSize: 22,
        color: 'white'
    },

    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    safeArea: {
        flex: 1,
        backgroundColor: colors.BACKGROUND
    },

    flatListContentContainer: {
        paddingLeft: 12,
        paddingTop: 24,
    },

    tile: {
        marginRight: 24,

    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 24,
        borderColor: colors.BRANDING,
        borderWidth: 1,
    },

    spacer: {
        paddingVertical: 8,
    },

    title: {
        marginVertical: 16,
        fontSize: 22,
    },

    inputContainer: {
        paddingTop: 24,

    },

    textInput: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 12,
        width: '90%',
    },

    viewMoreText: {
        fontSize: 12,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    searchIcon: {
        position: 'absolute',
        top: 32,
        right: 30,
        zIndex: 1,
    },

    viewMoreContainer: {
        paddingTop: 12,
        paddingRight: 12,
    }
})

export default styles