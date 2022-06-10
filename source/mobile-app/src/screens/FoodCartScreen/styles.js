import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
        height: '60%',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    itemInfoContainer: {
        height: '40%',
        paddingHorizontal: 8,
    },

})

export default styles