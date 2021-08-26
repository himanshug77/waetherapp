const path = require ('path')
const express = require ('express')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('hbs')
const publicDirectoryPath = path.join(__dirname,'../public')
const partialPath = path.join(__dirname,'../template/partial')
const viewPath = path.join(__dirname,'../template/views')

const geocode = require ('./utils/geocode');
const weather = require('./utils/weather');


app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicDirectoryPath))


app.get('',(req, res)=>{
    res.render('index',{
        title : ' weather app',
        name : 'himanshu Gupta 1977'
    })
})

// app.get('',(req, res)=>{
// res.send ('Hello !! Express')
// })

app.get('/help',(req, res)=>{
    res.send ('Hello !! help')
    })

app.get('/about',(req, res)=>{
        res.send ('<h1>Hello !! About page</h1>')
    })




    app.get('/weather',(req, res)=>{

    if (!req.query.address){
        return res.send({
        error :'pass the address'
        })
    }
 geocode(req.query.address,(error,{latitude, longitude, location} = {} )=>{

    weather (latitude, longitude, (error,{temperature} = {}) => {
        res.send({
            temperature : temperature,
            location : location
        })
    } )
    
}) 

})

    // app.get('*',(req, res)=>{
    //     res.send ('my 404 Hello')
    //     })
    

app.listen (port, ()=>{
    console.log ('Server is running at '+port)
})