//error middleware

const errorMiddleware = ( err, req, res, next)=>{

    let { message="Internal server error", statusCode=500} = err;
    
    res.status( statusCode).json({
        success: false,
        message,
    })
}

const catchAsyncErrors = (fn)=>{
    return function( req, res, next){
        fn( req, res, next).catch((err)=> next(err));
    }
}

class errorHandler extends Error{
    constructor( message, statusCode){
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}


module.exports = { errorMiddleware, catchAsyncErrors, errorHandler};

