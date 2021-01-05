const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const app = express();
const port = 4000;
const schema =  require('./graphSchema/schema');
const db = require('./config/mongoose');
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql : true
}));

app.listen(port,()=>{
    console.log(`Now listening for requests on port ${port}`);
});