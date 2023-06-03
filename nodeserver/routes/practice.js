const express = require('express');
const router = express.Router();

router.get('/',(request,response)=>{
    console.log("request is coming to router");
    response.send("Reauest coming to Practice")
})

module.exports = router;