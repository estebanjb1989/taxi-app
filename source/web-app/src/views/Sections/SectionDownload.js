/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import trioBannerAsset from "../../assets/img/triobanner.png"
import appStoreAsset from "../../assets/img/appstore.png";
import playStoreAsset from "../../assets/img/playstore.png";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const settings = useSelector(state => state.settingsdata.settings);
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{t('mobile_apps_on_store')}</h2>
            <img className={classes.triobanner} src={trioBannerAsset} alt="App Banner" />
          </GridItem>
          <GridItem xs={12} sm={8} md={6} style={{paddingTop:30}}>
            {settings && settings.AppleStoreLink?
            <a href={settings.AppleStoreLink}><img src={appStoreAsset} alt="Apple Store Link"/></a>
            :null}
            <span style={{marginRight: '5px'}}></span>
            {settings && settings.PlayStoreLink?
            <a href={settings.PlayStoreLink}><img src={playStoreAsset} alt="Playstore Link"/></a>
            :null}
          </GridItem>
        </GridContainer>

      </div>
    </div>
  );
}
