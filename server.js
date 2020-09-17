let express=require('express')

let srv=express()

let path=require('path')

srv.use('/',express.static(path.join(__dirname,'public')))

let SERVER_PORT=process.env.PORT||3333

srv.listen(SERVER_PORT)