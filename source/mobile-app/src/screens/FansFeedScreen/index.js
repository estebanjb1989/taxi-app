
import React from 'react'
import {
    Image,
    Text,
} from 'react-native'
import { Container } from 'components'
import { SafeAreaView } from 'react-navigation'
import styles from './styles'
import { BlurView } from 'expo-blur';
import mockCreators from '../../common/mock/creators'
import LockAsset from 'assets/images/lock.png'
import FansLogoAsset from 'assets/images/fansLogo.png'
import VerifiedAsset from 'assets/images/verified.png'

export default function FansFeedScreen({ navigation }) {
    return (
        <SafeAreaView
            style={styles.safeArea}
        >
            <Container justifyCenter alignCenter row style={styles.appNameContainer}>
                <Image source={FansLogoAsset} style={styles.logoAsset} />
                <Text style={styles.appName}>MyOnlyFans</Text>
            </Container>
            <Container scrollable>
                <Container>
                    {mockCreators.map(creator => (
                        <Container alignCenter onPress={() => {
                            alert(creator.name)
                        }} style={{
                            paddingBottom: 24,
                        }}>
                            <Container row justifyCenter alignCenter>
                                {creator.verified && (
                                    <Image source={VerifiedAsset} style={styles.verifiedIcon} />
                                )}
                                <Text style={styles.name}>{creator.name}</Text>
                            </Container>

                            <BlurView intensity={90} style={{
                                width: '80%%',
                                alignItems: 'center',
                            }}>
                                <Image source={creator.asset} style={styles.asset} />
                                <Container row style={{
                                    position: 'absolute',
                                    bottom: 24,
                                }}>
                                    <Text style={styles.price}>10 USD</Text>
                                    <Image source={LockAsset} style={styles.lockAsset} />
                                </Container>
                            </BlurView>
                        </Container>
                    ))}
                </Container>
            </Container>
        </SafeAreaView>
    )

}
