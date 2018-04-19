module.exports = {
    name: 'API',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    base_url: process.env.BASE_URL || 'http://localhost:3000',
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017' ,//'mongodb://127.0.0.1:27017/library',
        options:{
            dbName:process.env.MONGODB_DB || 'library',
            user:process.env.MONGODB_USER || '',
            pass:process.env.MONGODB_PASSWORD || ''
        }
    }
}
//mongodb://library-dbs:Zn95dEE6zh49Sn4anaZzsjkAF2If6KiSLX49gqauRuTTBgFPftroRVCxrPm5V9ae8tLqxnN9uAZaiwWMxCIv8A==@library-dbs.documents.azure.com:10255/?ssl=true&replicaSet=globaldb
//Zn95dEE6zh49Sn4anaZzsjkAF2If6KiSLX49gqauRuTTBgFPftroRVCxrPm5V9ae8tLqxnN9uAZaiwWMxCIv8A==

//library-dbs