const { catchAsyncErrors } = require('../middlewares/error.js');
const Role = require('../models/role.js');

//get all roles
exports.getRoles = catchAsyncErrors( async (req, res) => {
    
    
    const roles = await Role.find();

    res.status(200).json({
        success:true,
        roles,
    });
});

//create role
exports.createRole = catchAsyncErrors( async (req, res) => {
    
    if(req.body.permissions!==""){
        req.body.permissions = req.body.permissions.split(",");
    }
    else{
        req.body.permissions = ["READ"];
    }
    

    const newRole = new Role(req.body);
    await newRole.save();
    res.status(201).json({
        success:true,
        newRole,
        message: "New Role Created"
    });
});

//update role
exports.updateRole = catchAsyncErrors( async (req, res) => {
    
    
    if(req.body.permissions===""){
        req.body.permissions = ["READ"];
    }
    
    const updatedRole = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        success:true,
        updatedRole,
        message: "Role Updated Successfully"
    });
});

//delete role
exports.deleteRole = catchAsyncErrors( async (req, res) => {



    await Role.findByIdAndDelete(req.params.id);
    res.status(204).json({
        success: true,
        deletedId: req.params.id,
        message: "Role deleted successfully",
    });
});