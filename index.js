const express = require('express')
const graphHTTP = require('express-graphql')
const schema = require('./schema.js')
const app = express();

app.use('/graphql', graphHTTP({
    schema,
    graphiql: true,
}))

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log('Server started on port ',PORT)
})