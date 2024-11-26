const { Schema, model, default: mongoose} = require("mongoose");

const userSchema = Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type: String,
        require:true,
    },
    age:{
        type:Number,
        required:true
    },
    roles:[{
        type: Schema.ObjectId,
        ref:"Role",
    }],
    isActive:{
        type: Boolean,
        default: true,
    }
    

})


const User = mongoose.model("User",userSchema);

module.exports = User;




