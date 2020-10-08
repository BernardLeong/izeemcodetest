const express = require('express')
const path = require('path');
const fs = require('fs');
const Time = require('./Time');

const app = express();

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
  }

// app.use('/public',express.static(path.join(__dirname,'static')))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.post('/loadPage',(req,res)=>{
   //load page loads the default fields as well
   //calculates default time on field
   let newDate = new Date(Date.now());

   let time = newDate.toTimeString().split(' ')
   if(time[0] <'15:00:00'){
       let date = newDate.toTimeString()
       // var starttime = newDate.setHours(newDate.getHours() + 1);
       //reassign 
       var starttime = new Date(Date.now()).addHours(1)
       var starttime = starttime.toTimeString().split(' ')[0]
       
       let time = new Time
       var dateoCollect = newDate.toDateString()
       var starttime = time.timeroundup(starttime) 
       var endtime = time.calculateEndTime(starttime)
   }

   console.log(starttime)

   if(time[0] == '15:00:00' || time[0] > '15:00:00'){
       let dateoCollect = newDate.toDateString()
       // var starttime = newDate.setHours(newDate.getHours() + 1);
       //reassign 
       var starttime = '09:00:00'
       var endtime = '10:00:00'
   }

    var data = fs.readFileSync('./data/data.json')
    var data = JSON.parse(data)
    var changeData = data
    changeData.newbuttonPressed = true
    changeData.starttime = starttime
    changeData.endtime = endtime
    changeData.dateoCollect = dateoCollect

    var changeData = JSON.stringify(changeData)
    fs.writeFile('./data/data.json', changeData,(err)=>{
        if(err){
            consolelog(err.message)
        }
    })
    res.redirect('/')
})

app.get('/',(req,res)=>{
    var data = fs.readFileSync('./data/data.json')
    var data = JSON.parse(data)
    res.render('index',{
        newbuttonPressed : data.newbuttonPressed,
        starttime : data.starttime,
        endtime : data.endtime,
        locationName : data.locationName,
        locationAddress : data.locationAddress,
        contactName : data.contactName,
        contactNo : data.contactNo
    })
}) 

app.post('/calculateTime',(req,res)=>{
    
    res.redirect('/')
})

app.listen(3000)