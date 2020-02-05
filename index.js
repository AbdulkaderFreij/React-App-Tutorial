const express = require("express");
const app = express();

app.get('/api/customers', (req,res)=>{
    const customers= [
        {id:1, firstName:"Rudy", lasName:"Chakhtoura"},
        {id:2, firstName:"Tina", lasName:"Mechleb"},
        {id:3, firstName:"Basem", lasName:"Kreidly"},
    ];
    res.json(customers);
});





const port = 5000;

app.listen(port, ()=> {
    console.log(`Server listen on port ${port}`)
});
