const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const app= express();
const product=[
    {id:1, category:"electronics", name:"Samsung Smartphone", description:"Best Smartphone in town"},
    {id:2, category:"Home appliances", name:"Lg Washing machine", description:"Best Washing Machine in town"},
    {id:3, category:"apperal", name:"ShoppersStop T shirt", description:"Comfortable Tshirt"},
    {id:4, category:"shoes", name:"Nike Sport Shoes", description:"Best Running sport shoes"}
]
const users =[
    {uname:"admin", pass:"admin@csed"},
    {uname:"Ajay", pass:"ajay@123"},
    {uname:"binod", pass:"bin@123"},
    {uname:"cheTan", pass:"chetan@123"},
    {uname:"dhiraj", pass:"dhir@12"},
    {uname:"Ela", pass:"ela@123"},
 ]
 


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//creating get api

app.get("/",(req,res)=>{
    res.send(product)
})

app.post("/login",(req,res)=>{
    const data= req.body;
    var arr=users.filter((item,index)=>{
        return(
            item.uname === data.uname && item.pass === data.pass ?
            item 
            :null
        )
    })
    arr.length > 0?
    console.log("valid user")
    :console.log("invalid user")
    
})

app.listen(8000,()=>{
    console.log("Api working at port 8000")
})
