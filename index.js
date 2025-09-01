// import json-server
const JSONServer = require('json-server')

// create server for running json-file
const rBuilderserver = JSONServer.create()

// import 'db.json'
const router =JSONServer.router("db.json")

// create middleware
const middleware = JSONServer.defaults()

// define port run the app
const PORT = 3000 || process.env.PORT

// use middleware json server
rBuilderserver.use(middleware)

// define routes for client request
rBuilderserver.use(router)

// run server for client
rBuilderserver.listen(PORT,()=>{
    console.log(`rbuilderserver started at port:${PORT}and waiting for client request!!!`);
    
})


