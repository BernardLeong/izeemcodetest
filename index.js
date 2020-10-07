const express = require('express')
const path = require('path');
const fs = require('fs');

const app = express();
const data = 

// app.use('/public',express.static(path.join(__dirname,'static')))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.post('/newButton',(req,res)=>{
    //
})
app.get('/',(req,res)=>{
    var data = fs.readFileSync('./data/data.json')
    var data = JSON.parse(data)
    var parsedValue = JSON.stringify(data)
    res.render('index',{hi : data.data})
}) 

app.post('/calculateTime',(req,res)=>{
    console.log(req.body.locname)
    var data = fs.readFileSync('./data/data.json')
    var data = JSON.parse(data)

    var changeData = data
    changeData.data = 'data'
    var changeData = JSON.stringify(changeData)
    fs.writeFile('./data/data.json', changeData,(err)=>{
        if(err){
            consolelog(err.message)
        }
    })
    // console.log(data)
    // console.log(data)
    // if(req.body.locname){
    //     res.render('index',{locnamevalue: 'hii'})
    // }else{
    //     res.render('index',{locnamevalue: 'lol'})
    // }
    res.redirect('/')
})

app.listen(3000)