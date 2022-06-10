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
        margin: 8,
        height: 160,
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
    },
    taxiContainer: {
        width: '100%',
        height: 120,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 12,
        borderRadius: 8,
    },
    foodContainer: {
        width: '100%',
        height: 120,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    text: {
        fontSize: 18,
    }
})

export default styles