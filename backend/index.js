const express=require('express')
const cors=require('cors')
const Email=require('./email')



const app=express()
app.use(cors())
app.use(express.json())


app.post("/emails",async(req,res)=>{
    const email=new Email(req.body)
    const result=await email.save()
    res.send(result)
})




app.listen(4000)