const express = require('express')
const route = express.Router();

route.get('/' , (req,res)=>{

    res.send('Hi from User(s) !')
})


module.exports = {
    route
}