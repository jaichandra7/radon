const express = require('express');
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


  const gt=[1, 3,5,7,9,11,13,15,17,19]
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



module.exports = router;
// adding this comment for no reason