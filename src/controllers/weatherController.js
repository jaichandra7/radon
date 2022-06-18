const { default: axios } = require("axios")

let getWeather = async function(req,res) {
    try{
        let weather = req.query.weather
        let w = req.query.appid
        var options = { method: "get", URL:`http://api.openweathermap.org/data/2.5/weather?weather?weather=${weather}&w=${w}`
        }
        let result = await axios(options)
        res.status(200).snd({cityname: tempdata , result:result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message})
    }
}


let cities= async function(req,res) {
    try{
        let city=["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
        let citi=[]
        for (i=0; i<city.length; i++){
            let obj={city:city[i]}
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?city=${city[i]}&appid=1cc68e8339b7013552c99314f688ba0f`)
            obj.temp=resp.data.main.temp
            citi.push(obj)
            }
            console.log(citi)
            let sorted = citi.sort( function(a,b){return a.temp-b.temp} )
            res.status(200).send({status: true, data: sorted})
        }
        catch (err){
            return res.status(500).send({status: false , error: err.message})
        }
    }

module.exports.getWeather = getWeather
module.exports.cities = cities