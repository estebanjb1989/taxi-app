import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingRight: 24
    },
    title: {
        marginVertical: 16,
        fontSize: 22,
    },
    itemContainer: {
        borderWidth: .5,
        borderRadius: 12,
        borderColor: 'lightgrey',
        height: 160,
        marginHorizontal: 12,
        marginTop: 16,
    },
    itemImage: {
        width: '100%',
        height: '70%',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    itemInfoContainer: {
        height: '30%',
        paddingHorizontal: 8,
    },
    itemNameContainer: {
        maxWidth: '70%'
    }
})

export default styles