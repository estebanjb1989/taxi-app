import { fromGeoJSON } from "@mapbox/polyline";
import { StyleSheet } from 'react-native'
import { colors } from '../../common/theme'

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
    },

    name: {
        fontSize: 22,
        color: 'whitesmoke',
        marginVertical: 16,
    },

    appNameContainer: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: colors.BORDER_BACKGROUND
    },  

    appName: {
        fontSize: 22,
        color: 'whitesmoke',
        marginLeft: 4,
    },

    logoAsset: {
        width: 64,
        height: 64,
    },
    
    asset: {
        width: '100%',
        height: 200,
        zIndex: -1
    },

    price: {
        fontSize: 22,
        color: 'whitesmoke'
    },

    lockAsset: {
        marginLeft: 12,
        width: 24,
        height: 24,
    },

    verifiedIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    }

})

export default styles