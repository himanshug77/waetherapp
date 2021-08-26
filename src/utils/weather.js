const request = require('postman-request')


    const weather = ( latitude, longitude, callback)=>{
    
        const weatherUrl = 'http://api.weatherstack.com/current?access_key=beedbecff173f86e6f183c5b03fb7cdf&query='+latitude+','+longitude+'&units=f'
    
        request ({url: weatherUrl, json: true }, (error, response, body )=> {
            if ( error ){
            callback ('unable to connect to service', undefined)
    
            }else {
                callback(undefined, {
                    temperature : body.current.temperature
                                        
                })
            }
    
        } )
    
    }
    module.exports = weather 
