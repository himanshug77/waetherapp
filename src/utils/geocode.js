const request = require('postman-request')

const geocode = ( address, callback)=>{
    
    const geocordinates = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaGltYW5zaHVndXB0YTc3IiwiYSI6ImNrc2ZsaTZ4NTE4eGUyd280aTUwam05ZzYifQ.OARjBlK2bobmxXqQzSFhgw&limit=1'

    request ({url: geocordinates, json: true }, (error, response, body )=> {
        if ( error ){
        callback ('unable to connect to service', undefined)

        }else if ( body.features.length === 0){
            callback ('unable to find location', undefined)
        }else {
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude :  body.features[0].center[0],
                location : body.features[0].place_name
            })
        }

    } )

}
module.exports = geocode 

