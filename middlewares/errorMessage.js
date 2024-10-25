const errorMessage = (err,req,res,next)=>{
    res.json({
        error:err.message,
    })
}

module.exports = errorMessage