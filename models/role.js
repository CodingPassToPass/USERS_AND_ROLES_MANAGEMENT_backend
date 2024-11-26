const { Schema, model} = require("mongoose");

const roleSchema = Schema({
    name: {
        type: String,
        default: "viewer",
    },
    permissions:[{    
        type: String,     //[  'CREATE', 'READ', 'UPDATE', 'DELETE']
        default: ["READ"],
    }]

})

const Role = model("Role",roleSchema);

module.exports = Role ;

