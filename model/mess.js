var mongoose=require('mongoose');

var cateringSchema=new mongoose.Schema(
    {
        name:{type:String},contactNo:{type:String},
        rollNo:{type:String},address:{type:String},
        joiningDate:{type:String},messType:{type:String},
        menuType:{type:String},messAmount:{type:String},
        userId:{type:String},password:{type:String},
        confirmPw:{type:String},
    }
)

var cateringModel=mongoose.model('caterings',cateringSchema);

module.exports={cateringModel}