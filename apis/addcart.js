const Payload = require('../payload');
module.export.index=async function(req,res){
    return res.status(200).json({
        message: "cart list",
        Payload:Payload
    })
}
module.export.remove = async function(req,res){
    return res.status(200).json({
        message: "CartId removed deleted SuccessFully"
    });
}