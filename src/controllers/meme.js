const {default: axios } = require("axios")

const memes= async function(req,res) {
    try{
        let options={
            method:"post",
            // url:`https://api.imgflip.com/get_memes`
            url:`https://api.imgflip.com/caption_image?template_id=181913649&text0=humans&text1=Animals&username=chewie12345&password=meme@123`
            // url:`localhost:3000/meme?template_id=181913649&text0=humans&text1=Animals&username=chewie12345&password=meme@123`
            //  url: `https://api.imgflip.com/caption_image?template_id=181913649&text0=Humans`
        }
        let result = await axios(options)
        res.send({data: result.data})
    }
    catch (err) {
        console.log("This is the error :" , err.message)
        res.status(500).send({msg: "error", error: err.message })
    }
}

module.exports.memes = memes