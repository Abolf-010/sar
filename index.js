const experss = require('express')
const app=experss();
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.listen(80,console.log('server is run'))