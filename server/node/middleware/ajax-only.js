module.exports = function ajaxOnly(req, res, next)
{
    //check xhr
    //This will fail in the future when fetch becomes the norm for 
    //any kinds of http requests.
    if (req.xhr)
    {
        next();
    }
    else
    {
        console.log('invalid invocation of ajax only method.')
        res.status(403).json({message: "Access is not allowed."})
    }
}