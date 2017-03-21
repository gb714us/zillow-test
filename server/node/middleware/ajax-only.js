module.exports = function ajaxOnly(req, res, next)
{
    if (req.xhr)
    {
        next();
    }
    else
    {
        console.log('invalid invocation of ajax only method.')
        res.status(403).sendFile('error.html')
    }
}