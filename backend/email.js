const mongoose=require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/veggies")

let vegSchema=new mongoose.Schema({
    email:String
})

module.exports=mongoose.model("email",vegSchema)