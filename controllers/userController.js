const { errorHandler, catchAsyncErrors } = require('../middlewares/error.js');
const User = require('../models/user.js');

exports.getUsers = catchAsyncErrors( async (req, res) => {
    
    
    const users = await User.find().populate("roles");

    res.status(200).json({
        success:true,
        users,
    });
});


exports.createUser  = catchAsyncErrors( async (req, res) => {
    

    if(req.body.roles!==""){
        req.body.roles = req.body.roles.split(",");
    }
    else{
        req.body.roles = [];
    }


    
    const newUser  = new User(req.body);
    await newUser.save();
    res.status(201).json({
        success:true,
        newUser,
        message: "User Created "
    });
});

exports.updateUser  = catchAsyncErrors( async (req, res) => {
    
    if(req.body.roles!==""){
        req.body.roles = req.body.roles.split(",");
    }
    else{
        req.body.roles = [];
    }
    

    const updatedUser  = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        success:true,
        updatedUser,
        message:"User Updated Successfully"
    });
});

exports.deleteUser  = catchAsyncErrors( async (req, res) => {
  
    
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true,
        deletedId: req.params.id,
        message:"User Deleted Successfully",
    });
});