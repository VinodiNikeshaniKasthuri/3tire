const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

 
app.use(cors())

app.get('/healthcheck' , (req, res) => {
    res.status(200).send("server is up runing")
})


app.post('/auth/login',(req,res)=>{
    res.status(200).send({message: 'login successfull'})
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})