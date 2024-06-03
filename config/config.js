require('dotenv').config()

const config = {
    port : process.env.PORT || '3001',
    apiUrl : process.env.API_URL
}

module.exports = { config }