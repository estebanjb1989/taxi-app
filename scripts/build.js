const fs = require('fs')

const args = process.argv

const folderName = args[2]
const buildEnv = args[3]

const clientConfigString = fs.readFileSync('../clients/' + folderName + '/' + buildEnv + '/config.json',
    { encoding: 'utf8', flag: 'r' })
const clientConfig = JSON.parse(clientConfigString)

const appConfigString = fs.readFileSync('../source/config.json',
    { encoding: 'utf8', flag: 'r' })

const appConfig = JSON.parse(appConfigString)

appConfig.app_name = clientConfig.appName
appConfig.app_description = clientConfig.appDescription
appConfig.app_identifier = clientConfig.appIdentifier
appConfig.ios_app_version = clientConfig.iosAppVersion
appConfig.android_app_version = clientConfig.androidAppVersion
appConfig.facebookAppId = clientConfig.facebookAppId
appConfig.firebaseProjectId = clientConfig.firebaseProjectId
appConfig.googleApiKeys = {
    ios: clientConfig.googleApiKeys.ios,
    android: clientConfig.googleApiKeys.android,
    web: clientConfig.googleApiKeys.web,
    server: clientConfig.googleApiKeys.server,
}

const sampleDbString = fs.readFileSync('../source/functions/json/taxi-sample-db.json',
    { encoding: 'utf8', flag: 'r' })
const sampleDb = JSON.parse(sampleDbString)

sampleDb.settings.appName = clientConfig.appName
sampleDb.settings.code = clientConfig.currency
sampleDb.settings.country = clientConfig.country

fs.writeFileSync('../source/functions/json/taxi-sample-db.json', JSON.stringify(sampleDb, null, 2))

fs.writeFileSync('../source/config.json', JSON.stringify(appConfig, null, 2))