import { fromGeoJSON } from "@mapbox/polyline";
import { StyleSheet } from 'react-native'
import { colors } from '../../common/theme'

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.BACKGROUND
    },

    asset: {
        width: '100%',
        height: '40%'
    },

    title: {
        fontSize: 24,
        color: 'whitesmoke',

    },

    content: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        marginTop: -32,
        backgroundColor: colors.BACKGROUND,
        zIndex: 2,
        paddingTop: 24,
    },

    verifiedIcon: {
        width: 24,
        height: 24,
        marginLeft: 12,
    }

})

export default styles