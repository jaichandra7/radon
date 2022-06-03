const express = require('express');
const { xor } = require('lodash');
const lodash = require('lodash');
const externalModule1 =require('../logger/logger')
const externalModule2 =require('../util/helper')
const externalModule3 =require('../validator/formatter')
const router = express.Router();
 
router.get('/test-me', function (req, res) {
  externalModule1.a()
  externalModule2.dd()
  externalModule2.mm()
  externalModule2.bt()
  externalModule3.three()
   res.send('My first ever api!')
});
router.get('/hello',function(req,res){
  const mt = [ 'january','february','march','april','may','june','july','august','september','october','november','december']
  console.log(lodash.chunk(mt,4))


  const gt=[1,3,5,7,9,11,13,15,17,19]
  console.log(lodash.tail(gt))


  const mr1=[1,1,2,3,3,4,4,5]
  const mr2=[1,1,2,3,3,4,4,5]
  const mr3=[1,1,2,3,3,4,4,5]
  const mr4=[1,1,2,3,3,4,4,5]
  const mr5=[1,1,2,3,3,4,4,5]
  console.log(lodash.union(mr1,mr2,mr3,mr4,mr5))

  

const ms=[["horror","The shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log(lodash.fromPairs(ms))


  res.send("J .A .I")
})

router.get('/hey',function(req,res){
  res.send('boomer')
});
let players=
[
  {
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
      "swimming"
    ]
  },
  {
    "name": "gopal",
    "dob": "1/09/1995",
    "gender": "male",
    "city": "delhi",
    "sports":[
           "soccer"
    ]
  },
  {
    "name": "lokesh",
    "dob": "1/1/1990",
    "gender": "male",
    "city": "mumbai",
    "sports":[
         "soccer"
    ]
  },
]
router.post('/players', function (req,res){
let mx = req.body
let mx2 = mx.name
let isNameRepeated = false

for(let i=0; i < players.length; i++)
{
  if(players[i].name == mx2)
  {
   isNameRepeated=true;
    break;
  }
}
if(isNameRepeated){
  res.send("this player was already added!")
} else{
  players.push(mx)
  res.send(players)
}
});

module.exports = router;
// adding this comment for no reason