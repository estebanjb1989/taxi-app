import { StyleSheet } from 'react-native'
import { colors } from '../../common/theme'

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingRight: 24
    },
    safeArea: {
        backgroundColor: colors.BACKGROUND,
    },
    title: {
        marginVertical: 12,
        fontSize: 22,
        color: 'white'
    },
    itemContainer: {
        borderWidth: .5,
        borderRadius: 12,
        borderColor: colors.BRANDING,
        marginHorizontal: 24,
        marginTop: 24,
        height: 100,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    itemImage: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    itemTextContainer: {
        width: '100%',
        height: '20%',
        paddingHorizontal: 12,
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles