module.exports.errorHandler = (err, req, res, next)=> {
    res.status(err.status || 500).json({
        err: err.message || "something went wrong"
    });
}