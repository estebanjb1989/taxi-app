import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-navigation'
import TaxiScreen from './TaxiScreen'

export default function MapScreen(props) {

    return (
        <TaxiScreen navigation={props.navigation} />
    )

}