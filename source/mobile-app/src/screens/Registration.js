import React, { useState, useEffect, useContext } from 'react';
import { Registration } from '../components';
import { StyleSheet, View, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native"

import i18n from 'i18n-js';
import { FirebaseContext } from 'common/src';

export default function RegistrationPage(props) {
  const navigation = useNavigation();
  const { api } = useContext(FirebaseContext);
  const {
    emailSignUp, 
    validateReferer,
    checkUserExists,
    signIn
  } = api;
  const [loading, setLoading] = useState(false);
  const cars = useSelector(state => state.cartypes.cars);
  const settings = useSelector(state => state.settingsdata.settings);
  const [carTypes, setCarTypes] = useState(null);
  const dispatch = useDispatch();
  
  const { t } = i18n;

  useEffect(() => {
    if (cars) {
      let arr = [];
      for (let i = 0; i < cars.length; i++) {
        arr.push({ label: cars[i].name, value: cars[i].name });
      }
      setCarTypes(arr);
    }
  }, [cars]);

  const clickRegister = async (regData) => {

    setLoading(true);
    const res = await checkUserExists(regData)
    if(res){
      setLoading(false);
      Alert.alert(t('alert'),t('user_exists'));
    }
    // else if(res.error){
    //   setLoading(false);
    //   Alert.alert(t('alert'),t('email_or_mobile_issue'));
    // }
    else{
      if (regData.referralId && regData.referralId.length > 0) {
        validateReferer(regData.referralId).then((referralInfo)=>{
          if (referralInfo.uid) {
            emailSignUp({...regData, signupViaReferral: referralInfo.uid}).then((res)=>{
              setLoading(false);
              if(res.uid){
                if(settings.email_verify){
                  Alert.alert(t('email_verify_message'))
                  dispatch(signIn(regData.email,regData.password));
                }else{
                  Alert.alert(t('alert'),t('account_create_successfully'));
                }
                props.navigation.goBack();
              }else{
                Alert.alert(t('alert'),t('reg_error'));
              }
            })
          }else{
            setLoading(false);
            Alert.alert(t('alert'),t('referer_not_found'))
          }
        }).catch((error)=>{
          setLoading(false);
          Alert.alert(t('alert'),t('referer_not_found'))
        });
      } else {
        const res = await emailSignUp(regData)
        console.log(res)
        setLoading(false);
        if(res.uid){
          if(settings.email_verify){
            Alert.alert(t('email_verify_message'))
            dispatch(signIn(regData.email,regData.password));
          }else{
            Alert.alert(t('alert'),t('account_create_successfully'));
          }
          navigation.goBack();
        }else{
          Alert.alert(t('alert'),t('reg_error'));
        }
      }
    }
  }

  return (
    <View style={styles.containerView}>
      {carTypes?
      <Registration
        cars={carTypes}
        onPressRegister={(regData) => clickRegister(regData)}
        onPressBack={() => { props.navigation.goBack() }}
        loading={loading}>
      </Registration>
      :null}
    </View>
  );

}
const styles = StyleSheet.create({
  containerView: { flex: 1 },
  textContainer: { textAlign: "center" },
});
